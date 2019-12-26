"use strict";
/*
 * Сюда будем складывать сообщения.
 * Т.к. сообщения получаются асинхронно,
 * то мы не знаем, когда все будут получены.
 * Для этого мы выставляем cnt_total в 
 * общее кол-во и когда cnt_total будет равен
 * cnt - отображаем все сообщения на странице
 * p изначально хочется сделать массивом, но
 * из-за неопределённого порядка загрузки сообщений
 * параллельными запросами мы получим случайный порядок
 * сообщений в массиве, а не тот, который в posts.list.
 * Поэтому лучше использовать объект, куда под порядковыми
 * номерами сохранять сообщения и работать потом с ним в
 * цикле как с массивом.
 */
var posts = {
	p: {},
	cnt: 0,
	cnt_total: 0};

document.addEventListener("DOMContentLoaded", init)

function init()
{
	posts_load();
}


/**********************************************************************
 * POSTS ROUTINES
 **********************************************************************/
function posts_load()
{
	fetch("posts.list")
	.then(posts_load_onok)
	.catch(posts_load_onfail);
}

async function posts_load_onok(resp)
{
	var data;
	var lines, i;

	data = await resp.text();
	lines = data.split("\n");
	/* Последняя строка может пустой - её надо удалить в этом случае */
	if (lines[lines.length - 1] == "")
		lines.splice(lines.length - 1, 1);

	posts.cnt_total = lines.length;
	for(i = 0; i < lines.length; i++)
		post_load(i, lines[i]);
}

function posts_load_onfail(err)
{
	err_show("Ошибка загрузки списка сообщений", err);
}

function posts_add(pos, text)
{
	posts.p[pos] = text;
	
	posts.cnt++;
	if (posts.cnt == posts.cnt_total)
		posts_show();
}

function posts_show()
{
	var i, el;
	
	for(i = 0; i < posts.cnt; i++) {
		el = document.createElement("pre");
		el.textContent = posts.p[i];
		document.body.appendChild(el);
	}
	console.log(posts)
}


/**********************************************************************
 * POST ROUTINES
 **********************************************************************/
function post_load(pos, post_id)
{
	fetch(post_id + ".post")
	.then(post_load_onok.bind(this, pos))
	.catch(post_load_onfail.bind(this, post_id));
}

async function post_load_onok(pos, resp)
{
	var data = await resp.text();
	
	posts_add(pos, data);
}

function post_load_onfail(post_id, err)
{
	err_show(`Ошибка загрузки сообщения ${post_id}`, err);
}


/**********************************************************************
 * ERROR ROUTINES
 **********************************************************************/
function err_show(prefix, err)
{
	var msg = `${prefix}: ${err}`;

	console.log(msg);
	alert(msg);
}


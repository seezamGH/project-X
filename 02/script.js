document.addEventListener("DOMContentLoaded", init)

function init() {
  getPostsList("posts.list")
    .then(getPostData)
    .then(getAll)
    .then(printResult)
    .catch(error => console.log(error))
}

async function getAll(arr) {
  const result = [...res] = await Promise.all([...arr])
  return result
}

async function getData(url) {
  const response = await fetch(url)
  const list = await response.text()
  return list.split('\n')
}

function getPostsList(url) {
  return getData(url)
}

function getPostData(postList) {
  const arr = []
  postList.forEach(post => {
    arr.push(getData(post))
  })
  return arr
}

function printResult(arr) {
  const list = []
  arr.forEach(el => {
    list.push(`<div>${el}</div>`)
    document.body.innerHTML = list.join(' ')
  })
}

/*
  Могу предположить, что написал полную херь и все это пишется гораздо проще.
  Половину из того что написал сам толком не понимаю)) Помог метод научного тыка))
  Как я уже говорил, работа с запросами куда-то, для меня не очень понятна,
  а async await вместе с промисами, на которых они построены, вообще что то страшное.
  Но с другой стороны, не знаю как, но оно работает!!!)))

  И еще я подумал, может сделать хранение данных не в разных файлах, а в одном?
  Сделать там массив с данными и оттуда тянуть...
  Такого типа

  [
    {"id": "1", "title": "title1", "text": "text1"},
    {"id": "2", "title": "title2", "text": "text2"},
    {"id": "3", "title": "title3", "text": "text3"}
  ]

  Или не?))
*/
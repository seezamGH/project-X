'use strict'

document.addEventListener("DOMContentLoaded", init)

function init() {
  getPostsList("posts.list")
    .then(getPostsData)
    .then(getAll)
    .then(printResult)
    .catch(error => console.log(error))
}

async function getAll(arr) {
  const result = await Promise.all([...arr])
  return result
}

async function getData(url) {
  const response = await fetch(url)
  const data = await response.text()
  //console.log(`Data => [${url}]`, data)
  return data
}

async function getPostsList(url) {
  const list = await getData(url)
  //console.log('getPostsList', list)
  return list.split('\n')
}

function getPostsData(postList) {
  const arr = []
  postList.forEach(post => {
    if (post == "") {
      return
    }
    arr.push(getData(post + ".post"))
  })
  //console.log(arr)
  return arr
}

function printResult(arr) {
  arr.forEach(el => {
    if (el != "") {
      const pre = document.createElement("pre")
      pre.textContent = el
      document.body.appendChild(pre)
    }
  })
}


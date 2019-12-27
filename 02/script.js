'use strict'

document.addEventListener("DOMContentLoaded", init)

function init() {
  fetch("posts.list")
    .then(loadPosts)
    .catch(error => {
      console.log("Ошибка загрузки списка сообщений: ", error)
    })
}

async function loadPosts(response) {
  const data = await response.text()
  const postsList = data.trimEnd().split("\n")

  // if (postsList[postsList.length - 1] == "")
  // postsList.pop()

 // console.log(postsList)

  for (let i = 0; i < postsList.length; i++) {
    loadPost(postsList[i])
  }
  //console.log(data)
}

function loadPost(postID) {
  fetch(postID + ".post")
    .then(res => {
      if(!res.ok){
        throw new Error(`Проверить наличие файла [${postID}.post]`)
      }
      return res.text()
    })
    .then(printResult)
    .catch(error => {
      console.log("Ошибка загрузки поста ", error)
    })
}

function printResult(text) {
  //console.log(text)
  const pre = document.createElement("pre")
  pre.textContent = text
  document.body.appendChild(pre)
}

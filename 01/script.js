document.addEventListener('DOMContentLoaded', () => {

  const url = './text.data'

  fetch(url)
    .then(response => response.text())
    .then(data => {

      //вставить как html
      document.body.innerHTML = data

      //вставить как простой текст
      //document.body.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
})

/* как вставить строку с переносами не знаю */
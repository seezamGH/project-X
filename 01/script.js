document.addEventListener("DOMContentLoaded", init)

function init()
{
  fetch("text.data")
    .then(response => response.text())
    .then(data => document.body.textContent = data)
    .catch(error => console.log(error))
}


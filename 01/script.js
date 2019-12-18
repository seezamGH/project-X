document.addEventListener("DOMContentLoaded", init)

function init()
{
  get_text();
}

function get_text()
{
  fetch("text.data")
    .then(response => response.text())
    .then(data => document.body.textContent = data)
    .catch(error => console.log(error))
}

document.addEventListener("DOMContentLoaded", init)

function init()
{
  get_text();
}

function get_text()
{
  fetch("text.data")
    .then(response => response.text())
    .then(get_text_onok)
    .catch(error => console.log(error))
}

function get_text_onok(data)
{
    document.body.textContent = data;
}

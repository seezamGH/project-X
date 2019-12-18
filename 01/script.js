document.addEventListener("DOMContentLoaded", init)

function init()
{
  get_text();
}

function get_text()
{
  fetch("text.data")
    .then(get_text_onok)
    .catch(error => console.log(error))
}

async function get_text_onok(resp)
{
	var data;

    data = await resp.text();
    document.body.textContent = data;
}

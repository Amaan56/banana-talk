const inputArea = document.querySelector('.input-area');
const outputArea = document.querySelector('.output-area');
const translateBtn = document.querySelector('.translate-button');
const baseURL = 'http://api.funtranslations.com/translate/minion.json';

function constructUrl(searchParam) {
  return `${baseURL}?text=${searchParam}`;
}

function translateInput() {
  fetch(constructUrl(inputArea.value))
    .then((response) => response.json())
    .then((result) => {
      outputArea.innerText = result.contents.translated;
    })
    .catch((err) => {
      console.log(err);
      alert('Something wrong with the request, Please try again');
    });
}

translateBtn.addEventListener('click', translateInput);

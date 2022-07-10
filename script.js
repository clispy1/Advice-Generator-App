const adviceNum = document.querySelector(".id");
const desc = document.querySelector(".desc");
const changeBtn = document.querySelector(".change");

const api_url = 'https://api.adviceslip.com/advice';

async function getData() {
   const response = await fetch(api_url);
   const data = await response.json();

   adviceNum.textContent = data.slip.id;
   desc.textContent = `"${data.slip.advice}"`;

}

getData();

changeBtn.addEventListener('click', () => getData());

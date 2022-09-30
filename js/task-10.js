'user strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');

let number = 0;
inputEl.addEventListener('input', event => (number = event.currentTarget.value));

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < number; i += 1) {
    const element = document.createElement('div');
    element.style.height = '30px';
    element.style.width = '30px';
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }
  divEl.append(...elements);

  for (let i = 1; i < elements.length; i += 1) {
    elements[i].style.height = `${Number.parseInt(elements[i - 1].style.height) + 10}px`;
    elements[i].style.width = `${Number.parseInt(elements[i - 1].style.width) + 10}px`;
  }
}

const destroyBoxes = event => (divEl.innerHTML = '');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

// function createBoxes(event) {
//   // let number = Number(event.currentTarget.value);
//   // console.log(number);
//   const elements = [];
//   for (let i = 0; i < number; i += 1) {
//     elements.push(`<div class = 'new-collectionc'`);
//     console.log(elements);
//   }
//   console.log(elements);
// }

// console.log(markup);
// const  = elements.join('');
// divEl.insertAdjacentHTML('afterbegin', markup);

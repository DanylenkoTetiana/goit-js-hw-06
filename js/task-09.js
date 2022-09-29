'user strict';
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');

const handleClick = callback => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};

btnEl.addEventListener('click', handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

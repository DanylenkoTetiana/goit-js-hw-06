'user strict';
let counterValue = 0;
const btnIsPlustEl = document.querySelector('[data-action="increment"]');
const btnIsSubtracts = document.querySelector('[data-action="decrement"]');
const spanEl = document.querySelector('#value');

const handleClickAdd = event => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};
const handleClickSubtracts = event => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

btnIsPlustEl.addEventListener('click', handleClickAdd);
btnIsSubtracts.addEventListener('click', handleClickSubtracts);

'user strict';
const inputEl = document.querySelector('#validation-input');
const inputLengthNumber = Number(inputEl.dataset.length);
const valedForm = event =>
  event.currentTarget.value.length === inputLengthNumber
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');

inputEl.addEventListener('blur', valedForm);

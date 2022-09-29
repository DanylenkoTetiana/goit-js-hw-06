'user strict';
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener(
  'input',
  event =>
    (spanEl.textContent =
      event.currentTarget.value === null ? `Anonymous` : event.currentTarget.value)
);

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// })

'user strict';
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(spanEl);

inputEl.addEventListener('input', event => {
  console.log(Number(event.currentTarget.value));
  spanEl.style.fontSize = '16px';
  const nkjknk = Number(event.currentTarget.value);
  spanEl.style.fontSize = spanEl.style.fontSize + nkjknk;
  console.log(spanEl.style.fontSize);
});

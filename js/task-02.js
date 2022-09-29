'user strict';
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const components = ingredients.map(ingredient => {
  const componentEl = document.createElement('li');
  componentEl.textContent = ingredient;
  componentEl.class = 'item';
  return componentEl;
});
list.append(...components);

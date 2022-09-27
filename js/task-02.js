"user strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Варіант рішення через цикл, але не задовольняє умови ДЗ, щоб додавання усіх елементів було однією операцією

// const list = document.querySelector("#ingredients");
// console.log(list);
// for (let i = 0; i < ingredients.length; i += 1) {
//   const component = document.createElement("li");
//   component.textContent = ingredients[i];
//   component.class = "item";
//   console.log(component.class);
//   list.append(component);
// }

const list = document.querySelector("#ingredients");
console.log(list);

const component1 = document.createElement("li");
component1.textContent = ingredients[0];
component1.class = "item";

const component2 = document.createElement("li");
component2.textContent = ingredients[1];
component2.class = "item";

const component3 = document.createElement("li");
component3.textContent = ingredients[2];
component3.class = "item";

const component4 = document.createElement("li");
component4.textContent = ingredients[3];
component4.class = "item";

const component5 = document.createElement("li");
component5.textContent = ingredients[4];
component5.class = "item";

const component6 = document.createElement("li");
component6.textContent = ingredients[5];
component6.class = "item";

list.append(
  component1,
  component2,
  component3,
  component4,
  component5,
  component6
);

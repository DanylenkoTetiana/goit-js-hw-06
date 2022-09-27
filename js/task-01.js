"user strict";
const menuItemsByClass = document.querySelectorAll(".item");
const numbersCategories = menuItemsByClass.length;

console.log(`Number of categories:`, numbersCategories);

const titles = document.querySelectorAll("h2");

for (const title of titles) {
  console.log(`Category:`, title.textContent);
}

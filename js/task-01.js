'user strict';
const categoriesListEls = document.querySelectorAll('.item');
console.log(`Number of categories:`, categoriesListEls.length);

for (const categoriesListEl of categoriesListEls) {
  const itemsEl = categoriesListEl.querySelectorAll('li');
  const titleEl = categoriesListEl.querySelector('h2');
  console.log(`Category:`, titleEl.textContent);
  console.log(`Elements:`, itemsEl.length);
}

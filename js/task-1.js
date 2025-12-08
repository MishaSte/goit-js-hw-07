const category = document.querySelectorAll('.item');
console.log(`Number of categories: ${category.length}`);

category.forEach(item => {
  const title = item.querySelector('h2').textContent;
  console.log(`Category: ${title}`);

  const items = item.querySelectorAll('li').length;
  console.log(`Elements: ${items}`);
});

const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);

categoriesEl.querySelectorAll('.item').forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${item.querySelector('ul').children.length}`,
  );
});

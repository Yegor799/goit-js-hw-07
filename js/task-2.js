const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allItems = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});

document.querySelector('#ingredients').prepend(...allItems);

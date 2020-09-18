const counterValue = document.querySelector('#value');

let currentValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener('click', decrementValue);
refs.incrementBtn.addEventListener('click', incrementValue);

function decrementValue() {
  counterValue.textContent = currentValue -= 1;
}

function incrementValue() {
  counterValue.textContent = currentValue += 1;
}

const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const value = event.currentTarget.value;
  refs.nameLabel.textContent = value ? value : 'незнакомец';
}

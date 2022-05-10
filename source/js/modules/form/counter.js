const counterPr = () => {
  const btnQuantity = document.querySelectorAll('.cart-quantity__button');

  if (!btnQuantity.length) {
    return;
  }

  btnQuantity.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const direction = btn.dataset.direction;
      const inp = btn.parentElement.querySelector('.cart-quantity__form-item>.custom-input>label>input');
      let currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    });
  });
};
export {counterPr};

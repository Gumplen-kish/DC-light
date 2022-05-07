import IMask from 'imask';

const initPhoheMask = () => {
  const elements = document.querySelectorAll('input[type=tel]');

  if (!elements.length) {
    return;
  }

  elements.forEach((item) => {
    let maskOptions = {
      mask: '+{7}(000)000-00-00',
    };
    let mask = IMask(item, maskOptions);
  });
};
export {initPhoheMask};

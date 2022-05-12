const tabOrder = () => {
  const radioBtn = document.querySelectorAll('.product-tab__btn');
  const tabsItem = document.querySelectorAll('.product-tab__item');

  if (!radioBtn.length || !tabsItem.length) {
    return;
  }

  radioBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(`#${tabId}`);

      tabsItem.forEach(function (elem) {
        elem.classList.add('visually-hidden');
      });
      currentTab.classList.remove('visually-hidden');
    });
  });
};
export {tabOrder};

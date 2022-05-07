import Swiper, {Navigation, Pagination} from 'swiper';
import '../../vendor/swiper';

const initExamplesSlider = () => {
  const swiper = new Swiper('.examples-works__slider', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
      nextEl: '.examples-works__button-next',
      prevEl: '.examples-works__button-prev',
    },
  });
};

export {initExamplesSlider};

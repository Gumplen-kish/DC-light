import Swiper, {Navigation, Pagination} from 'swiper';
import '../../vendor/swiper';

const initExamplesSlider = () => {
  const swiper = new Swiper('.examples-works__slider', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {initExamplesSlider};

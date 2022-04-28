import Swiper, {Navigation, Pagination} from 'swiper';
import '../../vendor';
const initSwiperMain = () => {
  const swiper = new Swiper('.intro-slider', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.intro-slider__next',
      prevEl: '.intro-slider__prev',
    },
  });
};

export {initSwiperMain};

import Swiper, {Navigation, Pagination} from 'swiper';
import '../../vendor/swiper';
const initSwiperMain = () => {
  console.log("Я тут и был");
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

const initSliderHit = () => {
  console.log("Я заработал");
  const swiper = new Swiper('.product-card-slider__swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
      nextEl: '.product-card-slider__button__next',
      prevEl: '.product-card-slider__button__prev',
    },
  });
};


export {initSwiperMain, initSliderHit};

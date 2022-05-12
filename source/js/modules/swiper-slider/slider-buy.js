import Swiper, {Navigation} from 'swiper';
import '../../vendor/swiper';

const initSliderBuy = () => {
  const swiper = new Swiper('.product-buy-slider__slider-swiper', {
    modules: [Navigation],
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

export {initSliderBuy};

/* eslint-disable */

$(document).ready(function(){
  const slickSettings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    fade: true,
  };

  for (let i = 1; i <= 4; i++) {
    $(`.gallery-item--${i} .gallery-item__box--pictures`).slick(slickSettings);
  }
});

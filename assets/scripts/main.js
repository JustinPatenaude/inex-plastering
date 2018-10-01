$(document).ready(function(){
  var _slider = $('.home-banner__slider');
  _slider.slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true
  });
  $('.home-banner__content-left').on('click', function(){
    _slider.slick('slickPrev');
  });
  $('.home-banner__content-right').on('click', function(){
    _slider.slick('slickNext');
  });
});
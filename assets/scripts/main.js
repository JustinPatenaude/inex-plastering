$(document).ready(function(){
  /* ==========================
     HOME PAGE SLIDER
  ========================== */
  var _slider = $('.home-banner__slider');
  _slider.slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    fade: true
  });
  $('.home-banner__content-left').on('click', function(){
    _slider.slick('slickPrev');
  });
  $('.home-banner__content-right').on('click', function(){
    _slider.slick('slickNext');
  });

  /* ==========================
     MOBILE MENU
  ========================== */
  $('.js-mobile-menu-btn').on('click', function(){
    $('body').toggleClass('nav-opened');
  });
  $('.overlay').on('click', function(){
    $('body').removeClass('nav-opened');
  });

  /* ==========================
     GALLERY
  ========================== */
  var _gallery = $('.gallery');
  _gallery.magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });
});
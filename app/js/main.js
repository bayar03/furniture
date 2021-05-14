$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.contact-skider__wrap').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false
  });

  $('.article-slider-box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="../images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="../images/arrow-right.svg" alt="arrow right"></button>'
  });

  


  

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });
})
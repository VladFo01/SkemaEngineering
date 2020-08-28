$(document).ready(function(){
  $('.slider_items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          centerMode: true,
          swipe: true
          // dots: true
        }
      }
    ]
  });
  $('.slick-next').on('click', function() {
    $('.slider_items').slick('slickNext');
  });
  $('.slick-prev').on('click', function() {
    $('.slider_items').slick('slickPrev');
  });
});
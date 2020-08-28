$(document).ready(function () {
  const leftArrow = $('.slider_arrow-left');
  const rightArrow = $('.slider_arrow-right');
  const prevBtn = $('.slick-prev');
  const nextBtn = $('.slick-next');
  const firstSlide = $("[aria-describedby='slick-slide00']");
  const lastSlide = $("[aria-describedby='slick-slide05']");

  prevBtn.on('click', function () {
    nextBtn.addClass('slider_button-active');
    rightArrow.addClass('slider_arrow-active');
    if(firstSlide.hasClass('slick-current')){
      prevBtn.removeClass('slider_button-active');
      leftArrow.removeClass('slider_arrow-active');
    }
  });
  nextBtn.on('click', function () {
    prevBtn.addClass('slider_button-active');
    leftArrow.addClass('slider_arrow-active');
    if(lastSlide.hasClass('slick-active')){
      nextBtn.removeClass('slider_button-active');
      rightArrow.removeClass('slider_arrow-active');
    }
  });
});
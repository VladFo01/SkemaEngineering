$(document).ready(function () {
  const line = document.querySelector('.slider_line-bottom');
  const sliderContainer = document.querySelector('.slider_items');
  const sliderArrows = document.querySelectorAll('.slider_button');
  const sliderItems = document.querySelectorAll('.slick-slide');
  
  sliderArrows[1].addEventListener('click', () => {
    for(let i=1; i<sliderItems.length; i++){
      if(sliderItems[i].classList.contains('slick-active')){
        // for(let j=i; j<sliderItems.length; j++){
        //   line.classList.remove(`slider_line-bottom_${sliderItems[j+1].getAttribute('data-slick-index')}`);
        // }
        line.classList.add(`slider_line-bottom_${sliderItems[i].getAttribute('data-slick-index')-(-1)}`);
      }
    }
  });

  sliderArrows[0].addEventListener('click', () => {
    for(let i=0; i<sliderItems.length; i++){
      if(sliderItems[i].classList.contains('slick-active')){
        // for(let j=i; j<sliderItems.length; j++){
        //   line.classList.remove(`slider_line-bottom_${sliderItems[j+1].getAttribute('data-slick-index')}`);
        // }
        line.classList.remove('slider_line-bottom_6');
        line.classList.remove(`slider_line-bottom_${sliderItems[i].getAttribute('data-slick-index')-(-3)}`);
      }
    }
  });
  
});
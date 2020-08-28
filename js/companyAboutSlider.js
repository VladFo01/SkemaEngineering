// $(document).ready(function(){
//   $('.company_about-info').slick({
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000
//     // prevArrow: "<img src='./img/companyAbout_slider-arrow.svg' style='transform: rotate(180deg)' class='prev-btn'>",
//     // nextArrow: "<img src='./img/companyAbout_slider-arrow.svg' class='next-btn'>" 
//   });
// });

const elem = document.querySelector('.company_about');
const blockArray = document.querySelectorAll('.company_about-block');

if (elem.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    elem.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    elem.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
  e = e || window.event;

  // wheelDelta не даёт возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;

  let windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  let targetPosition = {
    top: window.pageYOffset + elem.getBoundingClientRect().top,
    bottom: window.pageYOffset + elem.getBoundingClientRect().bottom
  };
  // console.log('window: ', windowPosition.top, 'targetTop: ', targetPosition.top, 'targetBottom: ', targetPosition.bottom);

  if(windowPosition.top >= targetPosition.top-300 && windowPosition.top < targetPosition.bottom){
    for(let i=0; i<blockArray.length; i++){
      if(blockArray[i].classList.contains('block-active')){
        if(i === 0){
          if(delta > 0){
            e.preventDefault();
            blockArray[i].classList.remove('block-active');
            blockArray[i].classList.add('block-unactive');
            blockArray[i+1].classList.remove('block-unactive');
            blockArray[i+1].classList.add('block-active');
          }
          break;
        }
        if(i === 1){
          if(delta > 0){
            e.preventDefault();
            blockArray[i].classList.remove('block-active');
            blockArray[i].classList.add('block-unactive');
            blockArray[i+1].classList.remove('block-unactive');
            blockArray[i+1].classList.add('block-active');
          }
          if(delta < 0){
            e.preventDefault();
            blockArray[i].classList.remove('block-active');
            blockArray[i].classList.add('block-unactive');
            blockArray[i-1].classList.remove('block-unactive');
            blockArray[i-1].classList.add('block-active');
          }
          break;
        }
        if(i === 2){
          if(delta < 0){
            e.preventDefault();
            blockArray[i].classList.remove('block-active');
            blockArray[i].classList.add('block-unactive');
            blockArray[i-1].classList.remove('block-unactive');
            blockArray[i-1].classList.add('block-active');
          }
          break;
        }
      }
    }
  }

  // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
$(document).ready(function () {
  const elem = document.querySelector('#companyAbout');
  const blockArray = document.querySelectorAll('.company_about');

  if (document.body.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      document.body.addEventListener("wheel", onWheel, { passive: false });
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      document.body.addEventListener("mousewheel", onWheel, { passive: false });
    } else {
      // Firefox < 17
      document.body.addEventListener("MozMousePixelScroll", onWheel, { passive: false });
    }
  } else { // IE8-
    document.body.attachEvent("onmousewheel", onWheel, { passive: false });
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

    if(windowPosition.top >= targetPosition.top-100 && windowPosition.bottom < targetPosition.bottom+100){
      for(let i=0; i<blockArray.length; i++){
        if(blockArray[i].classList.contains('company_about-active')){
          if(i === 0){
            if(delta > 0){
              e.preventDefault();
              blockArray[i].classList.remove('company_about-active');
              $('html').animate({
                scrollTop: window.pageYOffset + blockArray[i+1].getBoundingClientRect().top
              }, 700);
              blockArray[i+1].classList.add('company_about-active');
            }
            break;
          }
          if(i === 1){
            if(delta > 0){
              e.preventDefault();
              blockArray[i].classList.remove('company_about-active');
              $('html').animate({
                scrollTop: window.pageYOffset + blockArray[i+1].getBoundingClientRect().top
              }, 700);
              blockArray[i+1].classList.add('company_about-active');
            }
            if(delta < 0){
              e.preventDefault();
              blockArray[i].classList.remove('company_about-active');
              $('html').animate({
                scrollTop: window.pageYOffset + blockArray[i-1].getBoundingClientRect().top
              }, 700);
              blockArray[i-1].classList.add('company_about-active');
            }
            break;
          }
          if(i === 2){
            if(delta < 0){
              e.preventDefault();
              blockArray[i].classList.remove('company_about-active');
              $('html').animate({
                scrollTop: window.pageYOffset + blockArray[i-1].getBoundingClientRect().top
              }, 700);
              blockArray[i-1].classList.add('company_about-active');
            }
            break;
          }
        }
        // else {
        //   e.preventDefault();
        //   console.log('Ok');
        // }
      }
    }

    // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }
});
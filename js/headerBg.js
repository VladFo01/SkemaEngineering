$(document).ready(function () {
  const headerBg = document.querySelector('.header-main');
  const targetBg = document.querySelector('.main');
  
  $(window).scroll(function () {
    let windowPositionBg = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    let targetPositionBg = {
      top: window.pageYOffset + targetBg.getBoundingClientRect().top,
      bottom: window.pageYOffset + targetBg.getBoundingClientRect().bottom
    };

    if(windowPositionBg.top >= targetPositionBg.top + 100){  
      headerBg.classList.add('noMagic');
    } else {
      headerBg.classList.remove('noMagic');
    }
  })
});
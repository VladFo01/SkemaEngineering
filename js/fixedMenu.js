$(document).ready(function () {
  if($('body').width() > 970){
    const navMenu = document.querySelectorAll('.main_info-nav');
  const menuLink = document.querySelectorAll('.anchor_link');

  for(let i=0; i<navMenu.length; i++){
    if(i !== 0){
      navMenu[i].classList.add('main_info-nav_disappear');
    } else {
      menuLink[i].classList.remove('anchor_link-active');
      // navMenu[i].classList.add('main_info-nav_fixed');
      navMenu[i].insertAdjacentHTML('beforebegin', "<div class='space space-off'></div>");
    }
  }

  navMenu[navMenu.length-1].insertAdjacentHTML('beforebegin', "<div class='space space-off'></div>");

  function scrollFunc (target, elemLink) {
    let windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    };
    // console.log('window: ', windowPosition.top, 'targetTop: ', targetPosition.top, 'targetBottom: ', targetPosition.bottom);

    if(windowPosition.top >= targetPosition.top-150 && windowPosition.top < targetPosition.bottom-150){  
      elemLink.classList.add('anchor_link-active');
    } else {
      elemLink.classList.remove('anchor_link-active');
    }
    // if(elemLink.classList.contains('anchor_link-active')){
    //   navMenu[0].classList.add("main_info-nav_fixed");
    // }
  }

  $(window).scroll(function () {
    for(let i=0; i<document.querySelectorAll('.main_info-block').length; i++){
      scrollFunc(document.querySelector(`#anchor_${i+1}`), menuLink[i]);
    }
    for(let i=0; i<navMenu.length; i++){
      if(menuLink[i].classList.contains('anchor_link-active')){
        navMenu[0].classList.add("main_info-nav_fixed");
        document.querySelectorAll('.space')[0].classList.add('space-on');
        document.querySelectorAll('.space')[0].classList.remove('space-off');
        break;
      } else {
        navMenu[0].classList.remove("main_info-nav_fixed");
        document.querySelectorAll('.space')[0].classList.add('space-off');
        document.querySelectorAll('.space')[0].classList.remove('space-on');
      }
    }
    if(window.pageYOffset + document.documentElement.clientHeight >= window.pageYOffset + navMenu[navMenu.length-1].getBoundingClientRect().bottom+150){
      navMenu[0].classList.add("main_info-nav_disappear");
      navMenu[navMenu.length-1].classList.remove('main_info-nav_disappear');
      document.querySelectorAll('.space')[1].classList.add('space-off');
      document.querySelectorAll('.space')[1].classList.remove('space-on');
      navMenu[navMenu.length-1].style.opacity = '1';
    } else {
      navMenu[0].classList.remove("main_info-nav_disappear");
      // navMenu[navMenu.length-1].classList.add('main_info-nav_disappear');
      // navMenu[navMenu.length-1].classList.add('space-off');
      navMenu[navMenu.length-1].style.opacity = '0';
      document.querySelectorAll('.space')[1].classList.add('space-on');
      document.querySelectorAll('.space')[1].classList.remove('space-off');
    }
  });
  }

});
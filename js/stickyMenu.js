$(document).ready(function () {
  const stickyBlockHeight = $('.page_nav-2').outerHeight();

  $('.page_nav-link_2').click(function (event) {
    const linkHref = $(this).attr('href');
    event.preventDefault();
    if($(this).text() !== 'О компании'){
      $('html').animate({
        scrollTop: $(linkHref).offset().top - stickyBlockHeight
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
    }
  });
  $('.page_nav-link').click(function (event) {

    const linkHref = $(this).attr('href');
    event.preventDefault();
    if($(this).text() !== 'О компании'){
      $('html').animate({
        scrollTop: $(linkHref).offset().top - stickyBlockHeight
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
    }
  });

  const projectTypes = document.getElementById('projectTypes');
  const objects = document.getElementById('objects');
  const licenses = document.getElementById('licenses');
  const clients = document.getElementById('clients');
  const contacts = document.getElementById('contacts');

  function scrollFunc (target, elemLink) {
    let windowPosition = {
      top: window.pageYOffset + stickyBlockHeight,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    };
    // console.log('window: ', windowPosition.top, 'targetTop: ', targetPosition.top, 'targetBottom: ', targetPosition.bottom);

    if(windowPosition.top >= targetPosition.top-150 && windowPosition.top < targetPosition.bottom-150){  
      elemLink.classList.add('page_nav-link_2-active');
    } else {
      elemLink.classList.remove('page_nav-link_2-active');
    }
  }

  $(window).scroll(function () {
    scrollFunc(projectTypes, document.querySelector('.nav-item_1'));
    scrollFunc(objects, document.querySelector('.nav-item_2'));
    scrollFunc(licenses, document.querySelector('.nav-item_3'));
    scrollFunc(clients, document.querySelector('.nav-item_4'));
    scrollFunc(contacts, document.querySelector('.nav-item_5'));
  });

});
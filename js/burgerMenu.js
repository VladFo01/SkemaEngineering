const menuIcon = document.querySelector('.header_nav-img');
const menuDelete = document.querySelector('.burger_delete-img');
const menuHr = document.querySelector('.header_main-hr');
const menuTop = document.querySelector('.header_main-wrapper');
const burgerBody = document.querySelector('.burger_body');
const burgerList = document.querySelectorAll('.burger_list');
const burgerListActivator = document.querySelectorAll('.burger_menu');
const burgerMenuArrow = document.querySelectorAll('.burger_menu-arrow');

for(let i=0; i<burgerList.length; i++){
  burgerListActivator[i].addEventListener('click', () => {
    burgerMenuArrow[i].classList.toggle('burger_menu-arrow_active');
    burgerList[i].classList.toggle('burger_list-active');
  })
}

menuIcon.addEventListener('click', () => {
  menuIcon.classList.add('is-unactive');
  menuDelete.classList.add('is-active');
  menuTop.classList.add('header_main-active');
  menuHr.classList.add('hr-active');
  burgerBody.classList.add('burger_body-active');
  document.body.classList.add('lock');
});
menuDelete.addEventListener('click', () => {
  menuIcon.classList.remove('is-unactive');
  menuDelete.classList.remove('is-active');
  menuTop.classList.remove('header_main-active');
  menuHr.classList.remove('hr-active');
  burgerBody.classList.remove('burger_body-active');
  document.body.classList.remove('lock');
});
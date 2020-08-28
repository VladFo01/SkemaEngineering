const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const navLink1 = document.querySelector('.header_nav-item_1');
const navLink2 = document.querySelector('.header_nav-item_2');
const navLink3 = document.querySelector('.header_nav-item_3');
const triangle1 = document.querySelector('.header_nav-item_triangle-1');
const triangle2 = document.querySelector('.header_nav-item_triangle-2');
const triangle3 = document.querySelector('.header_nav-item_triangle-3');
const closeArrow1 = document.querySelector('.close_arrow-1');
const closeArrow2 = document.querySelector('.close_arrow-2');
const closeArrow3 = document.querySelector('.close_arrow-3');
const modalBg = document.querySelectorAll('.header_modal-bg');

const toggleModal = (navLink, modal, triangle, closeArrow) => {

  navLink.addEventListener('mouseover', () => {
    // modal1.removeAttribute('style');
    // modal2.removeAttribute('style');
    // modal3.removeAttribute('style');
    // triangle1.removeAttribute('style');
    // triangle2.removeAttribute('style');
    // triangle3.removeAttribute('style');
    modal1.classList.remove('modal-open');
    modal2.classList.remove('modal-open');
    modal3.classList.remove('modal-open');
    triangle1.classList.remove('modal-open');
    triangle2.classList.remove('modal-open');
    triangle3.classList.remove('modal-open');
    navLink1.classList.remove('nav-item_active');
    navLink2.classList.remove('nav-item_active');
    navLink3.classList.remove('nav-item_active');


    // if(navLink.textContent === navLink1.textContent){
    //   navLink2.removeAttribute('style');
    //   navLink3.removeAttribute('style');
    // } else {
    //   if(navLink.textContent === navLink2.textContent){
    //     navLink1.removeAttribute('style');
    //     navLink3.removeAttribute('style');
    //   } else {
    //     navLink1.removeAttribute('style');
    //     navLink2.removeAttribute('style');
    //   }
    // }

    modal.classList.add('modal-open');
    triangle.classList.add('modal-open');
    navLink.classList.add('nav-item_active');
  });

  navLink.addEventListener('click', () => {
    // modal1.removeAttribute('style');
    // modal2.removeAttribute('style');
    // modal3.removeAttribute('style');
    // triangle1.removeAttribute('style');
    // triangle2.removeAttribute('style');
    // triangle3.removeAttribute('style');
    modal1.classList.remove('modal-open');
    modal2.classList.remove('modal-open');
    modal3.classList.remove('modal-open');
    triangle1.classList.remove('modal-open');
    triangle2.classList.remove('modal-open');
    triangle3.classList.remove('modal-open');
    navLink1.classList.remove('nav-item_active');
    navLink2.classList.remove('nav-item_active');
    navLink3.classList.remove('nav-item_active');


    // if(navLink.textContent === navLink1.textContent){
    //   navLink2.removeAttribute('style');
    //   navLink3.removeAttribute('style');
    // } else {
    //   if(navLink.textContent === navLink2.textContent){
    //     navLink1.removeAttribute('style');
    //     navLink3.removeAttribute('style');
    //   } else {
    //     navLink1.removeAttribute('style');
    //     navLink2.removeAttribute('style');
    //   }
    // }

    modal.classList.add('modal-open');
    triangle.classList.add('modal-open');
    navLink.classList.add('nav-item_active');
  });
  
  // navLink.addEventListener('mouseout', () => {
  //   if(modal.style.display === 'none' || !modal.classList.contains('modal-open')){
  //     navLink.removeAttribute('style');
  //   }

  //   modal.classList.remove('modal-open');
  //   triangle.classList.remove('modal-open');
  //   navLink.classList.remove('nav-item_active');
  // });

  // navLink.addEventListener('click', () => {
  //   modal1.style.display = 'none';
  //   modal2.style.display = 'none';
  //   modal3.style.display = 'none';
  //   triangle1.style.display = 'none';
  //   triangle2.style.display = 'none';
  //   triangle3.style.display = 'none';
  //   navLink1.removeAttribute('style');
  //   navLink2.removeAttribute('style');
  //   navLink3.removeAttribute('style');

  //   modal.style.display = 'block';
  //   triangle.style.display = 'block';
  //   navLink.style.color = '#fff';
  // });

  closeArrow.addEventListener('click', (e) => {
    e.preventDefault();
  
    modal.classList.remove('modal-open');
    triangle.classList.remove('modal-open');
    navLink.classList.remove('nav-item_active');
    // modal.removeAttribute('style');
    // triangle.removeAttribute('style');
    // navLink.removeAttribute('style');
  });
}

toggleModal(navLink1, modal1, triangle1, closeArrow1);
toggleModal(navLink2, modal2, triangle2, closeArrow2);
toggleModal(navLink3, modal3, triangle3, closeArrow3);

for(let i=0; i<modalBg.length; i++){
  modalBg[i].addEventListener('click', () => {
    modal1.classList.remove('modal-open');
    modal2.classList.remove('modal-open');
    modal3.classList.remove('modal-open');
    triangle1.classList.remove('modal-open');
    triangle2.classList.remove('modal-open');
    triangle3.classList.remove('modal-open');
    navLink1.classList.remove('nav-item_active');
    navLink2.classList.remove('nav-item_active');
    navLink3.classList.remove('nav-item_active');
  });
}
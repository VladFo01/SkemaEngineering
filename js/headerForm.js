const form = document.querySelector('.header_modal-form_wrapper');
const formBody = document.querySelector('.header_modal-form');
const formBtn = document.querySelector('.header_button');
const formClose = document.querySelector('.form-close');
const contactBtn = document.querySelector('.contacts_button');

const addClass = (block, className) => {
  block.classList.add(className);
}

const removeClass = (block, className) => {
  block.classList.remove(className);
}

formBtn.addEventListener('click', () => {
  document.body.classList.add('lock');
  form.classList.add('form-open');
  form.classList.add('header_modal-form_wrapper-active');
  setInterval(addClass(form, 'header_modal-form_wrapper-active_1'), 1000);
  setInterval(addClass(formBody, 'header_modal-form-active'), 1000);
  setInterval(addClass(formBody, 'header_modal-form-active_1'), 1000);
});

contactBtn.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.add('lock');
  form.classList.add('form-open');
  form.classList.add('header_modal-form_wrapper-active');
  setInterval(addClass(form, 'header_modal-form_wrapper-active_1'), 1000);
  setInterval(addClass(formBody, 'header_modal-form-active'), 1000);
  setInterval(addClass(formBody, 'header_modal-form-active_1'), 1000);
});

formClose.addEventListener('click', () => {
  removeClass(form, 'form-open');
  document.body.classList.remove('lock');
});
form.addEventListener('click', (event) => {
  let box = formBody.getBoundingClientRect();

  if(event.clientX > box.right || event.clientX < box.left || event.clientY > box.bottom || event.clientY < box.top){
    removeClass(form, 'form-open');
    document.body.classList.remove('lock');
  }
});
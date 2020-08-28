const arrow = document.querySelectorAll('.responsive_nav-img');
const list = document.querySelectorAll('.responsive_nav-list');
const activator = document.querySelectorAll('.responsive_nav-activator');

for( let i=0; i<activator.length; i++){
  activator[i].addEventListener('click', () => {
    arrow[i].classList.toggle('responsive_nav-img_active');
    list[i].classList.toggle('responsive_nav-list_active');
  })
}
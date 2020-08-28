const objectItem = document.querySelectorAll('.object_item');
const modalArray = document.querySelectorAll('.object_item-modal');

for(let i=0; i<objectItem.length; i++){
  objectItem[i].addEventListener('click', () => {
    if(modalArray[i].classList.contains('object_item-modal_active')){
      modalArray[i].classList.remove('object_item-modal_active');
    } else {
      for(let j=0; j<modalArray.length; j++){
        modalArray[j].classList.remove('object_item-modal_active'); 
      }
      modalArray[i].classList.add('object_item-modal_active');
    }
  });
}
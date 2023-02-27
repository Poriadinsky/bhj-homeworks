const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseButtons = document.querySelectorAll('.modal__close'); //---
const showSuccessButton = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

modalCloseButtons.forEach((button) => {
   button.addEventListener('click', () => {
      button.closest('.modal').classList.remove('modal_active');
   });
});

showSuccessButton.addEventListener('click', (event) => {
   event.preventDefault();
   modalMain.classList.remove('modal_active');
   modalSuccess.classList.add('modal_active');
});

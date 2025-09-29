const show = document.querySelector('.js-show-modal-button');
const modalContainer = document.querySelector('.js-modal-container');
const closeModal = document.querySelector('.js-close-modal');

show.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-show');
  
})

closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container-show');
  console.log('v');
})
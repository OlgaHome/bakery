const modal = document.querySelector('.beckdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggModal);
modalBtnClose.addEventListener('click', toggModal);
import './main.scss';

const btnsOpenModalEl = document.querySelectorAll('#open-modal')!;
const modalEl = document.querySelectorAll('.modal')!;
const overlayEl = document.querySelector('.overlay')!;
const btnCloseModalEl = document.querySelectorAll('.modal__button')!;

const openModal = (target: string) => {
  const modalEl = document.querySelector(`#${target}`)!;

  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

const closeModal = () => {
  for (let i = 0; i < modalEl.length; i++) {
    modalEl[i].classList.add('hidden');
  }

  overlayEl.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

for (let i = 0; i < btnsOpenModalEl.length; i++) {
  btnsOpenModalEl[i].addEventListener('click', (event) => {
    const buttonEl = (event?.target as HTMLButtonElement).closest('#open-modal')!;
    const modalTargetId = (buttonEl as HTMLButtonElement).dataset.target!;

    openModal(modalTargetId);
  });
}

for (let i = 0; i < btnsOpenModalEl.length; i++) {
  btnCloseModalEl[i].addEventListener('click', closeModal);
}

overlayEl.addEventListener('click', closeModal);

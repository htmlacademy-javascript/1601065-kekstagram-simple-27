//открытие и закрытие модального окна
import { isEscapeKey } from './data.js';
import { clearSimilarList } from './picture.js';

const imageForm = document.querySelector('.img-upload__overlay ');
imageForm.classList.remove('hidden');
// const body = document.querySelector('body');
// body.classList.add('.modal-open');


const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = imageForm.querySelector('#upload-cancel');


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  imageForm.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  imageForm.classList.add('hidden');
  clearSimilarList();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});

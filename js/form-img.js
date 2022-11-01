//открытие и закрытие модального окна
import { isEscapeKey } from './data.js';
import { clearSimilarList } from './picture.js';

const imgPreview = document.querySelector('.img-upload__preview');
const imageForm = document.querySelector('.img-upload__overlay ');
imageForm.classList.remove('hidden');


const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = imageForm.querySelector('#upload-cancel');


const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  imageForm.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
  imgPreview.style.transform = `scale(${1})`;
}


function closeUserModal () {
  imageForm.classList.add('hidden');
  clearSimilarList();
  document.removeEventListener('keydown', onModalEscKeydown);

}

userModalOpenElement.addEventListener('click', openUserModal);
userModalCloseElement.addEventListener('click', closeUserModal);

import { isEscapeKey } from './data.js';

const imageForm = document.querySelector('.img-upload__overlay ');
imageForm.classList.remove('hidden');
const body = document.querySelector('body');
body.classList.add('.modal-open');


const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = imageForm.querySelector('#upload-cancel');

userModalOpenElement.addEventListener('click', () => {
  imageForm.classList.remove('hidden');


  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imageForm.classList.add('hidden');
    }
  });
});

userModalCloseElement.addEventListener('click', () => {
  imageForm.classList.add('hidden');
});

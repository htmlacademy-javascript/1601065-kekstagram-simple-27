/* eslint-disable no-unused-vars */

import { showAlert } from './util.js';

const photoForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(photoForm,{
  classTo: 'img-upload__text text',
  errorTextParent: 'img-upload__text text',
  errorTextClass: 'img-upload__text text',
});

const setUserFormSubmit = (onSuccess) => {
  photoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple/data',
        {
          method: 'POST',
          body: formData,
        },
      ).then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        }
      })
        .catch(() => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        });
    }
  });
};

export {setUserFormSubmit};

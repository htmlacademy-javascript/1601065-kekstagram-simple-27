import { onModalCloseEscKeydown } from './form-img.js';
import { sendData } from './server.js';
import { isEscapeKey } from './form-img.js';
const formElement = document.getElementById('upload-select-image');
const buttonSubmitElement = document.querySelector('.img-upload__submit');
const messageSuccessTemplateElement = document.querySelector('#success').content.querySelector('.success');
const messageErrorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.body;

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
}, false);

const blockSubmitButton = () => {
  buttonSubmitElement.disabled = true;
  buttonSubmitElement.textContent = 'Публикация...';
};

const unblockSubmitButton = () => {
  buttonSubmitElement.disabled = false;
  buttonSubmitElement.textContent = 'Опубликовать';
};

function showSuccessMesage() {
  const fragment = new DocumentFragment();
  const clonedMessageSuccessTemplate = messageSuccessTemplateElement.cloneNode(true);
  fragment.append(clonedMessageSuccessTemplate);
  bodyElement.append(fragment);

  const successElement = document.querySelector('.success');
  const btnCloseSuccessElement = successElement.querySelector('.success__button');

  const onDocumentEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.remove();

      document.removeEventListener('keydown', onDocumentEscKeydown);
      document.removeEventListener('click', onDocumentClick);
    }
  };

  document.addEventListener('keydown', onDocumentEscKeydown);

  function onDocumentClick (evt) {
    if (evt.target === successElement) {
      evt.preventDefault();
      successElement.remove();

      document.removeEventListener('keydown', onDocumentEscKeydown);
      document.removeEventListener('click', onDocumentClick);
    }
  }

  document.addEventListener('click', onDocumentClick);

  btnCloseSuccessElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    successElement.remove();
    document.removeEventListener('keydown', onDocumentEscKeydown);
    document.removeEventListener('click', onDocumentClick);
  });
}


function getErrorMesage() {
  document.removeEventListener('keydown', onModalCloseEscKeydown);

  const fragment = new DocumentFragment();
  const clonedMessageErrorTemplate = messageErrorTemplateElement.cloneNode(true);
  fragment.append(clonedMessageErrorTemplate);
  bodyElement.append(fragment);

  const errorElement = document.querySelector('.error');
  const btnCloseErrorElement = errorElement.querySelector('.error__button');

  const onDocumentEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorElement.remove();

      document.removeEventListener('keydown', onDocumentEscKeydown);

      document.removeEventListener('click', onDocumentClick);
      document.addEventListener('keydown', onModalCloseEscKeydown);
    }
  };
  document.addEventListener('keydown', onDocumentEscKeydown);

  function onDocumentClick (evt) {
    if (evt.target === errorElement) {
      evt.preventDefault();
      errorElement.remove();
      document.removeEventListener('keydown', onDocumentEscKeydown);
      document.removeEventListener('click', onDocumentClick);
      document.addEventListener('keydown', onModalCloseEscKeydown);
    }
  }

  document.addEventListener('click', onDocumentClick);

  btnCloseErrorElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorElement.remove();
    document.removeEventListener('keydown', onDocumentEscKeydown);
    document.removeEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onModalCloseEscKeydown);
  });
}

const submitPhotoForm = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMesage();
        },
        () => {
          getErrorMesage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { submitPhotoForm, getErrorMesage, pristine };

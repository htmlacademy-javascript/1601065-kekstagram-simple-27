import { onModalCloseKeydown } from './form-img.js';
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

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.remove();

      document.removeEventListener('keydown', onDocumentKeydown);
    }
  };

  document.addEventListener('keydown', onDocumentKeydown);

  function onDocumentClick (evt) {
    if (evt.target === successElement) {
      evt.preventDefault();
      successElement.remove();

      document.removeEventListener('click', onDocumentClick);
    }
  }

  document.addEventListener('click', onDocumentClick);

  btnCloseSuccessElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    successElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  });
}


function showErrorMessage() {
  document.removeEventListener('keydown', onModalCloseKeydown);

  const fragment = new DocumentFragment();
  const clonedMessageErrorTemplate = messageErrorTemplateElement.cloneNode(true);
  fragment.append(clonedMessageErrorTemplate);
  bodyElement.append(fragment);

  const errorElement = document.querySelector('.error');
  const btnCloseErrorElement = errorElement.querySelector('.error__button');


  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorElement.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
      document.addEventListener('keydown', onModalCloseKeydown);
    }
  };
  document.addEventListener('keydown', onDocumentKeydown);

  function closeErrorMessage () {
    errorElement.remove();
    document.removeEventListener('click', onDocumentClick);
  }

  function onDocumentClick (evt) {
    if (evt.target === errorElement) {
      evt.preventDefault();
      closeErrorMessage ();
      onDocumentKeydown();
    }
  }

  document.addEventListener('click', onDocumentClick);

  btnCloseErrorElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeErrorMessage ();
    onDocumentKeydown();

  });
}

const setUserFormSubmit = (onSuccess) => {
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
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setUserFormSubmit, showErrorMessage, pristine };

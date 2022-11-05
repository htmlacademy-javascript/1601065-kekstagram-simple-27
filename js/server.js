//выпадающее окно красное

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '100%';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '50%';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.lineHeight = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.transform = 'translate(-50%, -50%)';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export { isEscapeKey, showAlert };

//отправка формы
import { onPopupEscKeydown } from './form-upload-img.js';
import { sendData } from './server.js';
// import { isEscapeKey } from './util.js'; // есть в этом файле

const form = document.getElementById('upload-select-image');
const btnSubmit = document.querySelector('.img-upload__submit');
const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
}, false);

const blockSubmitButton = () => {
  btnSubmit.disabled = true;
  btnSubmit.textContent = 'Публикация...';
};

const unblockSubmitButton = () => {
  btnSubmit.disabled = false;
  btnSubmit.textContent = 'Опубликовать';
};

function getSuccessMesage() {
  const fragment = new DocumentFragment();
  const clonedMessageSuccessTemplate = messageSuccessTemplate.cloneNode(true);
  fragment.append(clonedMessageSuccessTemplate);
  body.append(fragment);

  const success = document.querySelector('.success');
  const btnCloseSuccess = success.querySelector('.success__button');

  const onMesageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      success.remove();

      document.removeEventListener('keydown', onMesageEscKeydown);
      // eslint-disable-next-line no-use-before-define
      document.removeEventListener('click', onMesageDocument);
    }
  };

  document.addEventListener('keydown', onMesageEscKeydown);

  const onMesageDocument = (evt) => {
    if (evt.target === success) {
      evt.preventDefault();
      success.remove();

      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
    }
  };

  document.addEventListener('click', onMesageDocument);

  btnCloseSuccess.addEventListener('click', (evt) => {
    evt.preventDefault();
    success.remove();
    document.removeEventListener('keydown', onMesageEscKeydown);
    document.removeEventListener('click', onMesageDocument);
  });
}


function getErrorMesage() {
  document.removeEventListener('keydown', onPopupEscKeydown);

  const fragment = new DocumentFragment();
  const clonedMessageErrorTemplate = messageErrorTemplate.cloneNode(true);
  fragment.append(clonedMessageErrorTemplate);
  body.append(fragment);

  const error = document.querySelector('.error');
  const btnCloseError = error.querySelector('.error__button');

  const onMesageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      error.remove();

      document.removeEventListener('keydown', onMesageEscKeydown);
      // eslint-disable-next-line no-use-before-define
      document.removeEventListener('click', onMesageDocument);
      document.addEventListener('keydown', onPopupEscKeydown);
    }
  };
  document.addEventListener('keydown', onMesageEscKeydown);

  const onMesageDocument = (evt) => {
    if (evt.target === error) {
      evt.preventDefault();
      error.remove();
      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
      document.addEventListener('keydown', onPopupEscKeydown);
    }
  };

  document.addEventListener('click', onMesageDocument);

  btnCloseError.addEventListener('click', (evt) => {
    evt.preventDefault();
    error.remove();
    document.removeEventListener('keydown', onMesageEscKeydown);
    document.removeEventListener('click', onMesageDocument);
    document.addEventListener('keydown', onPopupEscKeydown);
  });
}

const setPhotoFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getSuccessMesage();
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

export { setPhotoFormSubmit, getErrorMesage };

//сервер
// import {showAlert} from './util.js'; //есть в файле
const getData = (onSuccess) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json())
    .then((photo) => {
      onSuccess(photo);
    })
    .catch(() => {
      showAlert('Ошибка сервера');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
      'Content-Type': 'multipart/form-data'
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };

const URL_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple' ;
const URL_PHOTOS = `${URL_SERVER}/data`;
const TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style = `z-index:100;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    padding: 10px 3px;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    background-color: red;
    transform: translate(-50%, -50%);`;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, TIME);
};

const getData = (onSuccess) => {
  fetch(
    URL_PHOTOS,
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
    URL_SERVER,
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

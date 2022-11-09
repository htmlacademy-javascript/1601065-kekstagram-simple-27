const URL_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple' ;
const URL_PHOTOS = `${URL_SERVER}/data`;
import { showAlert } from './show-alert.js';

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

const sendData = async (onSuccess, onFail, body) => {
  try{
    const response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body,
      },
    );
    if(!response.ok) {
      throw new Error('Не удалось отправить форму.Попробуйте еще раз');
    }

    onSuccess();
  }
  catch(error) {
    onFail(error.message);
  }
};


// const sendData = (onSuccess, onFail, body) => {
//   fetch(
//     URL_SERVER,
//     {
//       method: 'POST',
//       body,
//     },
//   )
//     .then((response) => {
//       if (response.ok) {
//         onSuccess();
//       } else {
//         onFail();
//       }
//     })
//     .catch(() => {
//       onFail();
//     });
// };

export { getData, sendData };


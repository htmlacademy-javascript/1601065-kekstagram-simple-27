//открытие и закрытие модального окна
import { isEscapeKey } from './data.js';
import { clearSimilarList } from './picture.js';

const imageForm = document.querySelector('.img-upload__overlay ');
imageForm.classList.remove('hidden');
const body = document.querySelector('body');
body.classList.add('.modal-open');


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


//Изменение размера изображения

function removeLastChar (str) {
  return str ? str.slice(0 , -1) : str;
}

function toNumber (str) {
  return Number(str);
}

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview');
const input = document.querySelector('input[name="scale"]');
const maxScale = 100;
const minScale = 25;
const step = 25;

scaleControlBigger.addEventListener('click', () => {
  const currentValue = input.value;
  const numberValue = toNumber(removeLastChar(currentValue));

  if (numberValue && numberValue < maxScale) {
    const newValue = numberValue + step;

    input.value = `${newValue}%`;
    imgPreview.style.transform = `scale(${newValue / 100})`;
  }
});

scaleControlSmaller.addEventListener('click', () => {
  const currentValue = input.value;
  const numberValue = toNumber(removeLastChar(currentValue));

  if (numberValue && numberValue > minScale) {
    const newValue = numberValue - step;

    input.value = `${newValue}%`;
    imgPreview.style.transform = `scale(${newValue / 100})`;
  }
});

//Изменение фильтров на фото


const effectsListElement = document.querySelector('.effects__list');
const radioEffects = document.querySelectorAll('input[name="effect"]');

effectsListElement.addEventListener('click', (index) => {
  const { target } = index;
  if (imgPreview.classList.length > 1) {
    const currentEffect = imgPreview.classList[1];

    imgPreview.classList.remove(currentEffect);
  }

  imgPreview.classList.add(`effects__preview--${target?.value}`);
  radioEffects.value = target?.value;
});


/* global Pristine:readonly */
const photoForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(photoForm,{
  classTo: 'img-upload__text text',
  errorTextParent: 'img-upload__text text',
  errorTextClass: 'img-upload__text text',
});

photoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

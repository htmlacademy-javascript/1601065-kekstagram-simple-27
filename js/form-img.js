import { initializeSlider, sliderIntensityEffectElement } from './initialize-slider.js';
import { isEscapeKey } from './util.js';
const fileInputElement = document.querySelector('.img-upload__input');
const modalImgElement = document.querySelector('.img-upload__overlay');
const hideModalElement = document.querySelector('#upload-cancel');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgPreviewElement = document.querySelector('.img-upload__preview img');
const previewEffectsInputElement = document.querySelectorAll('.effects__radio');
const sliderContainerElement = document.querySelector('.effect-level');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const textDescriptionElement = document.querySelector('.text__description');
const scaleValueText = scaleValueElement.value;


function closeModalEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function closeModalDocument (evt) {
  if (evt.target === modalImgElement) {
    evt.preventDefault();
    closeModal();
  }
}

function openModal () {
  modalImgElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', closeModalEscKeydown);
  document.addEventListener('click', closeModalDocument);
}

fileInputElement.addEventListener('change', (evt) => {
  evt.preventDefault();
  openModal();
});

hideModalElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

function closeModal () {
  document.body.classList.remove('modal-open');
  modalImgElement.classList.add('hidden');
  document.removeEventListener('keydown', closeModalEscKeydown);
  document.removeEventListener('click', closeModalDocument);

  textDescriptionElement.value = '';
  fileInputElement.value = '';
  scaleValueElement.value = scaleValueText;
  imgPreviewElement.removeAttribute('class');
  imgPreviewElement.removeAttribute('style');
  effectLevelValueElement.value = '';
  sliderContainerElement.hidden = true;
  sliderIntensityEffectElement.noUiSlider.destroy();
  initializeSlider();
  previewEffectsInputElement[0].checked = true;
}


export { closeModal, openModal, closeModalEscKeydown, isEscapeKey };

// открытие и закрытие модального окна

// const form = document.querySelector('.img-upload__form');
// const inputFileUpload = form.querySelector('#upload-file');
// const imgUploadOverlay = form.querySelector('.img-upload__overlay');
// const buttonUploatCancel = form.querySelector('#upload-cancel');
// const imgUploadSubmit = form.querySelector('.img-upload__submit');
// const imgUploadPreview = document.querySelector('.img-upload__preview');
// const img = imgUploadPreview.querySelector('img');
// const scaleControlValue = document.querySelector('.scale__control--value');
// const effectNone = document.querySelector('input[type="radio"][value="none"]');
// const sliderContainer = document.querySelector('.img-upload__effect-level');
// const comment = document.querySelector('.text__description');


// function formImgUploadReset () {
//   scaleControlValue.value = `${100}%`;
//   img.style.removeProperty('filter');
//   img.removeAttribute('class');
//   effectNone.checked = true;
//   sliderContainer.style.display = 'none';
//   comment.value = '';
// }


// function onImgEditorOpen () {
//   imgUploadOverlay.classList.remove('hidden');
//   document.body.classList.add('modal-open');
//   document.addEventListener('keydown', onImgEditorCloseKeydownEscape);
// }

// function onImgEditorClose () {
//   imgUploadOverlay.classList.add('hidden');
//   document.body.classList.remove('modal-open');
//   img.style.transform = `scale(${1})`;
//   inputFileUpload.value = '';
//   formImgUploadReset();
//   document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);
// }

// function onImgEditorCloseKeydownEscape (evt) {
//   if (evt.key === 'Escape') {
//     evt.preventDefault();
//     onImgEditorClose();
//     document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);
//   }
// }

// function onImgUploadSubmitDisabled () {
//   imgUploadSubmit.setAttribute('disabled', 'disabled');
// }

// inputFileUpload.addEventListener('change', onImgEditorOpen);

// buttonUploatCancel.addEventListener('click', onImgEditorClose);

// document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);

// form.addEventListener('submit', onImgUploadSubmitDisabled);

// export {onImgEditorOpen, onImgEditorClose};

const isEscapeKey = (evt) => evt.key === 'Escape';
const fileInputElement = document.querySelector('.img-upload__input');
const popupImgElement = document.querySelector('.img-upload__overlay');
const btnHidePopupElement = document.querySelector('#upload-cancel');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgPreviewElement = document.querySelector('.img-upload__preview img');
const previewEffectsInputElement = document.querySelectorAll('.effects__radio');
const sliderIntensityEffectElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.effect-level');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const textDescriptionElement = document.querySelector('.text__description');

const scaleValueTetx = scaleValueElement.value;
// import{initializeSlider} from './photo-filters.js';

const initializeSlider = () => {
  noUiSlider.create(sliderIntensityEffectElement, {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 1,
    step: .1,
    connect: 'lower',
    keyboardSupport: true,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    }
  });
};

export { initializeSlider };

function closePopupEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
}

function closePopupDocument (evt) {
  if (evt.target === popupImgElement) {
    evt.preventDefault();
    closePopup();
  }
}

function closePopup () {
  document.body.classList.remove('modal-open');
  popupImgElement.classList.add('hidden');
  document.removeEventListener('keydown', closePopupEscKeydown);
  document.removeEventListener('click', closePopupDocument);

  textDescriptionElement.value = '';
  fileInputElement.value = '';
  scaleValueElement.value = scaleValueTetx;
  imgPreviewElement.removeAttribute('class');
  imgPreviewElement.removeAttribute('style');
  effectLevelValueElement.value = '';
  sliderContainerElement.hidden = true;
  sliderIntensityEffectElement.noUiSlider.destroy();
  initializeSlider();
  previewEffectsInputElement[0].checked = true;
}

function openPopup () {
  popupImgElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', closePopupEscKeydown);
  document.addEventListener('click', closePopupDocument);
}

fileInputElement.addEventListener('change', (evt) => {
  evt.preventDefault();
  openPopup();
});

btnHidePopupElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup();
});

export { closePopup, openPopup, closePopupEscKeydown, isEscapeKey };

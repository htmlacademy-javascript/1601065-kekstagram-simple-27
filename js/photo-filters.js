const imgPreview = document.querySelector('.img-upload__preview');
const effectChrome = document.querySelector ('#effect-chrome');
const effectNone = document.querySelector('#effect-none');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
const buttonClik = document.querySelector ('#upload-cancel');

effectChrome.addEventListener('click', () => {
  imgPreview.classList.add('effects__preview--chrome');
  imgPreview.classList.remove('effects__preview--sepia');
  imgPreview.classList.remove('effects__preview--marvin');
  imgPreview.classList.remove('effects__preview--phobos');
  imgPreview.classList.remove('effects__preview--heat');
  imgPreview.classList.remove('effects__preview--none');
});

effectNone.addEventListener('click', () => {
  imgPreview.classList.add('effects__preview--none');
  imgPreview.classList.remove('effects__preview--chrome');
  imgPreview.classList.remove('effects__preview--sepia');
  imgPreview.classList.remove('effects__preview--marvin');
  imgPreview.classList.remove('effects__preview--phobos');
  imgPreview.classList.remove('effects__preview--heat');
});

effectSepia.addEventListener('click', () => {
  imgPreview.classList.add('effects__preview--sepia');
  imgPreview.classList.remove('effects__preview--none');
  imgPreview.classList.remove('effects__preview--chrome');
  imgPreview.classList.remove('effects__preview--marvin');
  imgPreview.classList.remove('effects__preview--phobos');
  imgPreview.classList.remove('effects__preview--heat');
});

effectMarvin.addEventListener('click', () => {
  imgPreview.classList.add('effects__preview--marvin');
  imgPreview.classList.remove('effects__preview--sepia');
  imgPreview.classList.remove('effects__preview--none');
  imgPreview.classList.remove('effects__preview--chrome');
  imgPreview.classList.remove('effects__preview--phobos');
  imgPreview.classList.remove('effects__preview--heat');
});

effectPhobos.addEventListener('click', () => {
  imgPreview.classList.add('effects__preview--phobos');
  imgPreview.classList.remove('effects__preview--marvin');
  imgPreview.classList.remove('effects__preview--sepia');
  imgPreview.classList.remove('effects__preview--none');
  imgPreview.classList.remove('effects__preview--chrome');
  imgPreview.classList.remove('effects__preview--heat');
});

effectHeat.addEventListener('click', () => {
  imgPreview.classList.add('effects__preview--heat');
  imgPreview.classList.remove('effects__preview--phobos');
  imgPreview.classList.remove('effects__preview--marvin');
  imgPreview.classList.remove('effects__preview--sepia');
  imgPreview.classList.remove('effects__preview--none');
  imgPreview.classList.remove('effects__preview--chrome');
});

buttonClik.addEventListener('click', () => {
  imgPreview.classList.remove('effects__preview--heat');
  imgPreview.classList.remove('effects__preview--phobos');
  imgPreview.classList.remove('effects__preview--marvin');
  imgPreview.classList.remove('effects__preview--sepia');
  imgPreview.classList.remove('effects__preview--none');
  imgPreview.classList.remove('effects__preview--chrome');
});

const sliderElement = document.querySelector('effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 20,
});

// const imgPreview = document.querySelector('.img-upload__preview');
// const effectsListElement = document.querySelector('.effects__list');
// const radioEffects = document.querySelectorAll('input[name="effect"]');

// effectsListElement.addEventListener('click', (index) => {
//   const { target } = index;
//   if (imgPreview.classList.length > 1) {
//     const currentEffect = imgPreview.classList[1];

//     imgPreview.classList.remove(currentEffect);
//   }

//   imgPreview.classList.add(`effects__preview--${target?.value}`);
//   radioEffects.value = target?.value;
// });


// const slider = document.querySelector('.effect-level__slider');
// const sliderValue = document.querySelector('.effect-level__value');
// const imgContainer = document.querySelector('.img-upload__preview');
// const img = imgContainer.querySelector('img');
// const effectsList = document.querySelector('.effects__list');
// const effectsInputRadio = effectsList.querySelectorAll('input[type="radio"]');
// const sliderContainer = document.querySelector('.img-upload__effect-level');
// const scaleControlValue = document.querySelector('.scale__control--value');


// sliderValue.value = 100;
// sliderContainer.style.display = 'none';

// noUiSlider.create(slider, {
//   range: {
//     min: 0,
//     max: 100,
//   },
//   start: 100,
//   step: 1,
//   connect: 'lower',
//   format: {
//     to: function (value) {
//       if (Number.isInteger(value)) {
//         return value.toFixed(0);
//       }
//       return value.toFixed(1);
//     },
//     from: function (value) {
//       return parseFloat(value);
//     },
//   },
// });

// slider.noUiSlider.on('update', () => {
//   sliderValue.value = slider.noUiSlider.get();

//   if (effectsInputRadio[1].checked) {
//     img.style.filter = `grayscale(${sliderValue.value})`;
//   }

//   if (effectsInputRadio[2].checked) {
//     img.style.filter = `sepia(${sliderValue.value})`;
//   }

//   if (effectsInputRadio[3].checked) {
//     img.style.filter = `invert(${sliderValue.value}%)`;
//   }

//   if (effectsInputRadio[4].checked) {
//     img.style.filter = `blur(${sliderValue.value}px)`;
//   }

//   if (effectsInputRadio[5].checked) {
//     img.style.filter = `brightness(${sliderValue.value})`;
//   }
// });

// function onEffectChange (evt) {
//   if (evt.target.matches('input[type="radio"]')) {
//     img.removeAttribute('class');
//     img.style.removeProperty('filter');
//     const classImg = `effects__preview--${evt.target.value}`;
//     img.classList.add(classImg);
//     scaleControlValue.value = `${100}%`;
//     img.style.transform = `scale(${1})`;

//     if (evt.target.value === 'chrome') {
//       slider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 1,
//         },
//         start: 1,
//         step: 0.1,
//       });
//     }

//     if (evt.target.value === 'sepia') {
//       slider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 1,
//         },
//         start: 1,
//         step: 0.1,
//       });
//     }

//     if (evt.target.value === 'marvin') {
//       slider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 100,
//         },
//         start: 100,
//         step: 1,
//       });
//     }

//     if (evt.target.value === 'phobos') {
//       slider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 3,
//         },
//         start: 3,
//         step: 0.1,
//       });
//     }

//     if (evt.target.value === 'heat') {
//       slider.noUiSlider.updateOptions({
//         range: {
//           min: 1,
//           max: 3,
//         },
//         start: 3,
//         step: 0.1,
//       });
//     }

//     if (evt.target.value === 'none') {
//       sliderContainer.style.display = 'none';
//     } else {
//       sliderContainer.style.display = 'block';
//     }
//   }
// }

// effectsList.addEventListener('change', onEffectChange);

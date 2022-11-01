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


// effectsListElement.addEventListener('click', (index) => {
//   const { target } = index;
//   if (imgPreview.classList.length > 1) {
//     const currentEffect = imgPreview.classList[1];

//     imgPreview.classList.remove(currentEffect);
//   }

//   imgPreview.classList.add(`effects__preview--${target?.value}`);
//   radioEffects.value = target?.value;
// });

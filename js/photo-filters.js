const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const imgContainer = document.querySelector('.img-upload__preview');
const img = imgContainer.querySelector('img');
const effectsList = document.querySelector('.effects__list');
const effectsInputRadio = effectsList.querySelectorAll('input[type="radio"]');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const scaleControlValue = document.querySelector('.scale__control--value');

sliderValue.value = 100;
sliderContainer.style.display = 'none';

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
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
  },
});

slider.noUiSlider.on('update', () => {
  sliderValue.value = slider.noUiSlider.get();

  if (effectsInputRadio[1].checked) {
    img.style.filter = `grayscale(${sliderValue.value})`;
  }

  if (effectsInputRadio[2].checked) {
    img.style.filter = `sepia(${sliderValue.value})`;
  }

  if (effectsInputRadio[3].checked) {
    img.style.filter = `invert(${sliderValue.value}%)`;
  }

  if (effectsInputRadio[4].checked) {
    img.style.filter = `blur(${sliderValue.value}px)`;
  }

  if (effectsInputRadio[5].checked) {
    img.style.filter = `brightness(${sliderValue.value})`;
  }
});

function onEffectChange (evt) {
  if (evt.target.matches('input[type="radio"]')) {
    img.removeAttribute('class');
    img.style.removeProperty('filter');
    const classImg = `effects__preview--${evt.target.value}`;
    img.classList.add(classImg);
    scaleControlValue.value = `${100}%`;
    img.style.transform = `scale(${1})`;

    if (evt.target.value === 'chrome') {
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    }

    if (evt.target.value === 'sepia') {
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    }

    if (evt.target.value === 'marvin') {
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    }

    if (evt.target.value === 'phobos') {
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }

    if (evt.target.value === 'heat') {
      slider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }

    if (evt.target.value === 'none') {
      sliderContainer.style.display = 'none';
    } else {
      sliderContainer.style.display = 'block';
    }
  }
}

effectsList.addEventListener('change', onEffectChange);

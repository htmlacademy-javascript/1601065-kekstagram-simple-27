const effectsListElement = document.querySelector('.effects__list');
const radioEffects = document.querySelectorAll('input[name="effect"]');
const imgPreview = document.querySelector('.img-upload__preview');

effectsListElement.addEventListener('click', (index) => {
  const { target } = index;
  if (imgPreview.classList.length > 1) {
    const currentEffect = imgPreview.classList[1];

    imgPreview.classList.remove(currentEffect);
  }

  imgPreview.classList.add(`effects__preview--${target?.value}`);
  radioEffects.value = target?.value;
});

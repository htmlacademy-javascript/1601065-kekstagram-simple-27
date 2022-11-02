//Изменение размера изображения
// const scaleControlSmaller = document.querySelector('.scale__control--smaller');
// const scaleControlBigger = document.querySelector('.scale__control--bigger');
// const imgPreview = document.querySelector('.img-upload__preview img');
// const input = document.querySelector('input[name="scale"]');
// const maxScale = 100;
// const minScale = 25;
// const step = 25;


// function removeLastChar (string) {
//   return string ? string.slice(0,-1) : string;
// }


// function toNumber (string) {
//   return Number(string);
// }

// scaleControlBigger.addEventListener('click', () => {
//   const currentValue = input.value;
//   const numberValue = toNumber(removeLastChar(currentValue));

//   if (numberValue && numberValue < maxScale) {
//     const newValue = numberValue + step;

//     input.value = `${newValue}%`;
//     imgPreview.style.transform = `scale(${newValue / 100})`;
//   }
// });

// scaleControlSmaller.addEventListener('click', () => {
//   const currentValue = input.value;
//   const numberValue = toNumber(removeLastChar(currentValue));

//   if (numberValue && numberValue > minScale) {
//     const newValue = numberValue - step;

//     input.value = `${newValue}%`;
//     imgPreview.style.transform = `scale(${newValue / 100})`;
//   }
// });

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 25;

const scaleImage = (value = DEFAULT_SCALE) => {
  img.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value,10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value,10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener ('click', onSmallerButtonClick);
biggerButton.addEventListener ('click', onBiggerButtonClick);

export {resetScale};

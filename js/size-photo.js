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

//Изменение размера изображения
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview img');
const input = document.querySelector('input[name="scale"]');
const maxScale = 100;
const minScale = 25;
const step = 25;


function removeLastChar (string) {
  return string ? string.slice(0,-1) : string;
}


function toNumber (string) {
  return Number(string);
}

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

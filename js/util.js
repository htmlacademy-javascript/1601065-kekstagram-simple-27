//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:
//имя_функции(от, до); // Результат: целое число из диапазона "от...до"
//Функцию взяла с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  if (min > max) {
    const newMax = min;
    min = max;
    max = newMax;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются

}


getRandomIntInclusive(1, 25);


const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
// Пример использования функции: имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит
//Функция не использовалась

function checkMaxString(line, maxlength) {
  return line.length > maxlength;
}

checkMaxString('Текст сообщения', 50);

//массив случайной длины из значений, значения не повторяются
function getListElements(counter) {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    const newElem = i;
    newArray.push(newElem);
  }
  return newArray;
}

// const showAlert = (message) => {
//   const alertContainer = document.createElement('div');
//   alertContainer.style.zIndex = '100';
//   alertContainer.style.position = 'absolute';
//   alertContainer.style.left = '0';
//   alertContainer.style.top = '0';
//   alertContainer.style.right = '0';
//   alertContainer.style.padding = '10px 3px';
//   alertContainer.style.fontSize = '30px';
//   alertContainer.style.textAlign = 'center';
//   alertContainer.style.backgroundColor = 'red';

//   alertContainer.textContent = message;

//   document.body.append(alertContainer);

//   setTimeout(() => {
//     alertContainer.remove();
//   }, ALERT_SHOW_TIME);
// };


export {getRandomArrayElement};
export {getRandomIntInclusive};
export {checkMaxString};
export {getListElements};
// export {showAlert};

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


//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
// Пример использования функции: имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

function checkMaxString(line, maxlength) {
  return line.length > maxlength;
}

checkMaxString('Текст сообщения', 50);


//Больше деталий (название задания) 4 раздел

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200,
};

const DESCRIPTION = [
  'кот',
  'собака',
  'мышь',
  'утка',
  'гусь',
  'курица',
  'осень',
  'весна',
  'лето',
  'зима',
  'машина',
  'мотоцикл',
  'автобус',
  'улица',
  'дом',
  'утка',
  'небо',
  'тарелка',
  'вилка',
  'ложка',
  'чашка',
  'стакан',
  'камень',
  'вода',
  'трава',
];

//массив случайной длины из значений, значения не повторяются
function getListElements(counter) {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    const newElem = i;
    newArray.push(newElem);
  }
  return newArray;
}

const ARRAY_OF_OBJECTS = getListElements(25);
const SIMILAR_PHOTO_COUNTER = 4;


const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];
const object = () => ({
  id: getRandomArrayElement(ARRAY_OF_OBJECTS),
  url: `photos/${getRandomArrayElement(ARRAY_OF_OBJECTS)}.jpg`,
  description: getRandomArrayElement (DESCRIPTION),
  likes: getRandomIntInclusive(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomIntInclusive(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
});

const photoVariety = Array.from({length: SIMILAR_PHOTO_COUNTER}, object);

console.log(photoVariety);

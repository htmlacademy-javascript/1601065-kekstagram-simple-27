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


//Больше деталий (название задания)
// Обьект состоит из пяти ключей (ID, URL, DESCRIPTION,LIKES, COMMENTS)


const ID = [
  getRandomIntInclusive(1, 25),
];
const URL = [
  `photos/${ getRandomIntInclusive(1, 25) }.jpg`
];
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
  'земля',
];
const LIKES = [
  getRandomIntInclusive(15, 200),
];

const COMMENTS = [
  getRandomIntInclusive(0, 200),
];

const SIMILAR_WIZARD_COUNT = 4;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// const createWizard = () => {
//   const randomIDIndex = getRandomPositiveInteger(0, ID.length - 1);
//   const randomURLIndex = getRandomPositiveInteger(0, URL.length - 1);
//   const randomDESCRIPTIONIndex = getRandomPositiveInteger(0, DESCRIPTION.length - 1);
//   const randomLIKESIndex = getRandomPositiveInteger(0, LIKES.length - 1);
//   const randomCOMMENTSIndex = getRandomPositiveInteger(0, COMMENTS.length - 1);
//   return {
//     id: ID[randomIDIndex],
//     url: URL[randomURLIndex],
//     description: DESCRIPTION[randomDESCRIPTIONIndex],
//     likes: LIKES[randomLIKESIndex],
//     comments: COMMENTS[randomCOMMENTSIndex]
//   };
// };

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const object = () => ({
  id: getRandomArrayElement (ID),
  url: getRandomArrayElement (URL),
  description: getRandomArrayElement (DESCRIPTION),
  likes: getRandomArrayElement (LIKES),
  comments: getRandomArrayElement (COMMENTS),
});

const similarWizards = Array.from({length: SIMILAR_WIZARD_COUNT}, object);

console.log(similarWizards);

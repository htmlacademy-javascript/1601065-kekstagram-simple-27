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
  //не знаю как сделать такб чтобы ID не повторялись. Поэтому указала цифрами от 1 до 25. Через getRandomIntInclusive(1, 25)
  // цифры повторяются.
  // getRandomIntInclusive(1, 25),
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25'

];
const URL = [
//   `photos/${ getRandomIntInclusive(1, 25) }.jpg` тут тоже цифры повторяются.
// ];
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
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


const SIMILAR_PHOTO_COUNTER = 4;


const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];
const object = () => ({
  id: getRandomArrayElement (ID),
  url: getRandomArrayElement (URL),
  description: getRandomArrayElement (DESCRIPTION),
  likes: getRandomArrayElement (LIKES),
  comments: getRandomArrayElement (COMMENTS),
});

const photoVariety = Array.from({length: SIMILAR_PHOTO_COUNTER}, object);

console.log(photoVariety);

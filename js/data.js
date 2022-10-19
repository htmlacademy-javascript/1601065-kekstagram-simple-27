import { getRandomArrayElement } from './util.js';
import {getRandomIntInclusive} from './util.js';
import { getListElements } from './util.js';


//Больше деталий (название задания) 4 раздел

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200,
};

const DESCRIPTIONS = [
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


const ARRAY_OF_OBJECTS = getListElements(25);
const SIMILAR_PHOTO_COUNTER = 25;


const object = () => ({
  id: getRandomArrayElement(ARRAY_OF_OBJECTS),
  url: `photos/${getRandomArrayElement(ARRAY_OF_OBJECTS)}.jpg`,
  description: getRandomArrayElement (DESCRIPTIONS),
  likes: getRandomIntInclusive(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomIntInclusive(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
});

const photoVariety = () => Array.from({length: SIMILAR_PHOTO_COUNTER}, object);
export {photoVariety};


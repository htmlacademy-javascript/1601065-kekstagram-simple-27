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
getRandomIntInclusive(1, 10);


//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
// Пример использования функции: имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

function checkMaxString(line, maxlength) {
  return line.length > maxlength;
}

checkMaxString('Текст сообщения', 50);


//Больше деталий (название задания)
// Обьект состоит из пяти ключей (ID, URL, DESCRIPTION,LIKES, COMMENTS)


// eslint-disable-next-line no-unused-vars
const DESCRIPTION = [
  'Котик',
  'Небо',
  'Собака',
  'Рука',
  'Город',
  'Окно',
  'Семья',
  'Улица',
  'Дерево',
  'Осень',
  'Зима',
  'Лето',
  'Весна',
  'Дождь',
  'Град',
  'Листья',
  'Лужа',
  'Одежда',
  'Свадьба',
  'Ужин',
  'Ресторан',
  'Посуда',
  'Карусель',
  'Фотограф',
  'Часы',
];

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

const createWizard = (num) => {
  const attributesImg = {
    'id': num,
    'url': `photos/${num}.jpg`,
    'description': `Фото - ${num}`,
    'likes': getRandomInt(15, 200),
    'comments': getRandomInt(0, 200)
  };
};


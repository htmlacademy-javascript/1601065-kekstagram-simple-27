//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:
//имя_функции(от, до); // Результат: целое число из диапазона "от...до"
//Функцию взяла с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive(1, 10);


//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
// Пример использования функции: имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

function checkMaxString(line, maxlength) {
  if (line.length > maxlength) {
    return false;
  }
  return true;
}

checkMaxString('Текст сообщения', 50);

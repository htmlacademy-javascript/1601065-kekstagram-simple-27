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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 25);


const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

function checkMaxString(line, maxlength) {
  return line.length > maxlength;
}

checkMaxString('Текст сообщения', 50);

function getListElements(counter) {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    const newElem = i;
    newArray.push(newElem);
  }
  return newArray;
}

const isEscapeKey = (evt) => evt.key === 'Escape';


export {getRandomArrayElement};
export {getRandomIntInclusive};
export {checkMaxString};
export {getListElements};
export {isEscapeKey};

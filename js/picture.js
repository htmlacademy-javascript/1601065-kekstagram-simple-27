import { photoVariety } from './data.js';

const userPhotos = document.querySelector('.pictures__title');
userPhotos.classList.remove('visually-hidden');


const similarWizardPhotos = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotos = photoVariety();


const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, comments, likes}) => {
  const photosElement = similarWizardPhotos.cloneNode(true);
  photosElement.querySelector('.picture__img').src = url;
  photosElement.querySelector('.picture__comments').textContent = comments;
  photosElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(photosElement);
});

document.querySelector('.pictures').appendChild(similarListFragment);

const clearSimilarList = () => {
  userPhotos.innerHTML = '';
};

export {clearSimilarList};

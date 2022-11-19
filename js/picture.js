const userPhotos = document.querySelector('.pictures__title');
const similarPhotos = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderSimilarList = (similarPhoto) => {
  const similarListFragment = document.createDocumentFragment();

  similarPhoto.forEach(({url, comments, likes}) => {
    const photosElement = similarPhotos.cloneNode(true);
    photosElement.querySelector('.picture__img').src = url;
    photosElement.querySelector('.picture__comments').textContent = comments;
    photosElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(photosElement);
  });

  document.querySelector('.pictures').appendChild(similarListFragment);
};
const clearSimilarList = () => {
  userPhotos.innerHTML = '';
};

export {clearSimilarList, renderSimilarList};

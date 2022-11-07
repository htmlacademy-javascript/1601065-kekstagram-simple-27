/* eslint-disable no-undef */
import './picture.js';
import './util.js';
import './data.js';
import './form-img.js';
import './size-photo.js';
import './validity.js';
import './photo-filters.js';
import './server.js';
// import{similarPhotos} from './picture.js';

// import {onImgEditorClose } from './form-img.js';
// import {setUserFormSubmit} from './validity.js';
// import {renderSimilarList} from './picture.js';


// fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
//   .then((response) => response.json())
//   .then((similarPhotos) => {
//     renderSimilarList(similarPhotos);
//   });

// setUserFormSubmit(onImgEditorClose);
import { getData } from './server.js';
import { closePopup } from './form-img.js';
import {setPhotoFormSubmit} from './validity.js';
import {renderSimilarList} from './picture.js';

getData((photo) => {
  renderSimilarList(photo);
});

setPhotoFormSubmit(closePopup);



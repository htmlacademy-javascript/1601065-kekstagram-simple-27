import './picture.js';
import './util.js';
import './data.js';
import './form-img.js';
import './size-photo.js';
import './validity.js';
import './photo-filters.js';
import {onImgEditorClose } from './form-img.js';
import {setUserFormSubmit} from './validity.js';
import {renderSimilarList} from './picture.js';


fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((similarPhotos) => {
    renderSimilarList(similarPhotos);
  });

setUserFormSubmit(onImgEditorClose);

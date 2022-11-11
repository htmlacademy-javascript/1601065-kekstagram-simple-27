import './picture.js';
import './util.js';
import './data.js';
import './form-img.js';
import './size-photo.js';
import './validity- sending.js';
import './photo-filters.js';
import './server.js';
import { getData } from './server.js';
import { closeModal } from './form-img.js';
import {setPhotoFormSubmit} from './validity- sending.js';
import {renderSimilarList} from './picture.js';

getData((photo) => {
  renderSimilarList(photo);
});

setPhotoFormSubmit(closeModal);

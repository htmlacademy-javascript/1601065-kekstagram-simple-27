import './size-photo.js';
import './photo-filters.js';
import { getData } from './server.js';
import { closeModal } from './form-img.js';
import {photoFormSubmit} from './validity-sending.js';
import {renderSimilarList} from './picture.js';

getData((photo) => {
  renderSimilarList(photo);
});

photoFormSubmit(closeModal);

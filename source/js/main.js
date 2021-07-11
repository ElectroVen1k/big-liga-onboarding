import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

//

const pagePreview = document.querySelector('.preview');
const bodyElement = document.querySelector('body');
const infoCоntent = document.querySelector('.info');
const logoElement = document.querySelector('.preview__logo');

const windowDesktopSize = window.matchMedia('(max-width: 1023px)');

const onLoadPage = function () {
  pagePreview.classList.add('preview--loaded');
};

const removeLoader = function () {
  if (windowDesktopSize.matches) {
    bodyElement.addEventListener('touchstart', onScreenTouch);
  } else {
    bodyElement.addEventListener('keydown', onLoaderEnterPress);
  }
};

const onLoaderEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    onRemovedLoader();
  }
};

const onScreenTouch = function () {
  onRemovedLoader();
};

const onRemovedLoader = function () {
  pagePreview.classList.add('preview--removed');
  infoCоntent.classList.add('info--showed');
  bodyElement.removeEventListener('keydown', onLoaderEnterPress);
  onMainContentTouch();
};

const onMainContentTouch = function () {
  if (windowDesktopSize.matches) {
    bodyElement.addEventListener('touchstart', toggleAdditicalInfo);
    logoElement.addEventListener('touchstart', onLogoTouch);
  }
};

const toggleAdditicalInfo = function () {
  if (infoCоntent.classList.contains('info--showed-additical')) {
    infoCоntent.classList.remove('info--showed-additical');
  } else {
    infoCоntent.classList.add('info--showed-additical');
  }
};

const onLogoTouch = function (evt) {
  evt.stopPropagation();
};

window.onload = function () {
  onLoadPage();
  removeLoader();
};

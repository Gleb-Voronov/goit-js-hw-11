import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

document.querySelector('.span.loader').classList.remove('loader');

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  showLoader();
  const usersRequest = event.target.elements.text.value.trim();
  if (!usersRequest) {
    return;
  }

  getImagesByQuery(usersRequest)
    .then(response => {
      const array = response.data.hits;
      if (!array.length) {
        iziToast.warning({
          message:
            'На жаль, за вашим запитом нічого не знайдено. Спробуйте інший запит!',
          messageColor: '#ffffff',
        });
        clearGallery();
        hideLoader();
        return;
      }
      createGallery(array);
      hideLoader();
    })

    .catch(error => console.log(error.message));

  form.reset();
}
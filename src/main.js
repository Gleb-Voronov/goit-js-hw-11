import { getImagesByQuery } from './js/pixabay-abi.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
  
const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: 'Поле пошуку не може бути порожнім',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'Увага',
        message: 'На жаль, за вашим запитом нічого не знайдено. Спробуйте інший запит!',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Сталася помилка під час виконання запиту. Спробуйте ще раз!',
    });
  } finally {
    hideLoader();
    form.reset();
  }
});

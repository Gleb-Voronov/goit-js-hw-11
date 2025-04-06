import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
  
export function showLoader() {
  document.getElementById('loader').classList.add('show');
}

export function hideLoader() {
  document.getElementById('loader').classList.remove('show');
}

let lightbox;

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img  class="img" src="${webformatURL}" alt="${tags}" />
         <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${likes}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${views}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${comments}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${downloads}</p>
      </li>
    </ul>
      </a>
    </li>
  `).join('');
  gallery.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a');
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
import axios from 'axios';

const API_KEY = '49662945-8e09ebd816e6f5a1c3c1cc874';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios(`https://pixabay.com/api/?${params}`);
}
import axios from 'axios';

const API_KEY = '49662945-8e09ebd816e6f5a1c3c1cc874';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};

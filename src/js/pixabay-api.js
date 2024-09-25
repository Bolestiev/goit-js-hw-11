const API_KEY = '46177713-58a5ba69e9c8cb46785531260';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}

import { fetchImages } from './pixabay-api';
import { renderImages } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');
let currentPage = 1;
let query = '';

form.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.searchQuery.value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a valid search query!' });
    return;
  }

  loader.style.display = 'block';
  try {
    const { hits } = await fetchImages(query, currentPage);
    if (hits.length === 0) {
      iziToast.warning({ message: 'Sorry, no images found!' });
    } else {
      renderImages(hits);
      new SimpleLightbox('.gallery a').refresh();
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong!' });
  } finally {
    loader.style.display = 'none';
  }
});

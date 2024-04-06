import { form, page, input } from '../main';
import axios from 'axios';

export let limit = 15;

export async function fetchPhotoFromPixabay() {
  let inputValueForForm;
  if (page === 1) {
    const inputSearch = form.elements.search;
    inputValueForForm = inputSearch.value.trim().split(' ').join('+');
  } else {
    inputValueForForm = input.trim().split(' ').join('+');
  }
  const searchParams = new URLSearchParams({
    key: '43179971-31cef5ae97b630d4ee80eef54',
    q: [inputValueForForm],
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: [page],
    per_page: [limit],
  });
  const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  return response.data;
}

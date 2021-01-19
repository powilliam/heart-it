import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 9XVThSa36lIuwFtQJPeeGsQdPYoj5EraLwH-LCB1Ub0',
  },
});

export const getPictures = async ({page = 1, per_page = 5, order_by}) =>
  await unsplash.get('photos', {params: {page, per_page, order_by}});

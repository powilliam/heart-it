import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 9XVThSa36lIuwFtQJPeeGsQdPYoj5EraLwH-LCB1Ub0',
  },
});

const DEFAULT_PARAMS = {
  page: 1,
  per_page: 5,
};

export const getPictures = async ({order_by, ...DEFAULT_PARAMS}) =>
  await unsplash.get('photos', {params: DEFAULT_PARAMS, order_by});

export const searchPictures = async ({query, order_by, ...DEFAULT_PARAMS}) =>
  await unsplash.get('search/photos', {
    params: {query, order_by, ...DEFAULT_PARAMS},
  });

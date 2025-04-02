import axios from 'axios';

const urlTrend = 'https://api.themoviedb.org/3/trending/movie/day';
const urlSearch = 'https://api.themoviedb.org/3/search/movie';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTRhN2UwOTc4Njg1NDRiMjNiOThlODBhZGJlMDIxYSIsIm5iZiI6MTc0MzE0MTU3MS4wMTMsInN1YiI6IjY3ZTYzYWMzMDI3ZTczNzQwNjAwMmU1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qcD-3r1uCewYgi0wpTgLoTmQ8YAa_m3C3pYWXKV34E';

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    accept: 'application/json',
  },
  params: {
    page: 1,
  },
};
//Trending movies
export const moviesTrending = async () => {
  const response = await axios.get(`${urlTrend}`, options);
  console.log(response);

  return response.data.results;
};

//Movie details
export const movieDetails = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options);
  return response.data;
};

//Movie credits
export const movieDetailsCast = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  return response.data;
};

//Movie reviews
export const movieDetailsReviews = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);
  return response.data;
};

//Search movie
export const movieSearch = async query => {
  const response = await axios.get(`${urlSearch}`, {
    ...options,
    params: {
      ...options.params,
      query,
    },
  });
  return response.data.results;
};
// ================================= ============================
// Trending movies - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// Search movie - пошук фільму за ключовим словом на сторінці фільмів.
// Movie details - запит повної інформації про фільм для сторінки кінофільму.
// Movie credits - запит інформації про акторський склад для сторінки кінофільму.
// Movie reviews - запит оглядів для сторінки кінофільму.

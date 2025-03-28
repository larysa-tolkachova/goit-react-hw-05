import axios from 'axios';

const urlTrend = 'https://api.themoviedb.org/3/trending/movie/day';
// const urlSearch = 'https://api.themoviedb.org/3/search/movie';
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

export const moviesTrending = async () => {
  const response = await axios.get(`${urlTrend}`, options);
  console.log(response);

  return response.data.results;
};

// =============================================================
//   export const fetchArt = async (page, search) => {
//     const response = await axios.get(`${BASE_URL}`, {
//       params: {
//         client_id: API_KEY,
//         query: search,
//         page: page,
//         per_page: 20,
//       },
//     });

//     return response.data.results;
//   };

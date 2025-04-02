import { useEffect, useState } from 'react';
import { movieSearch } from '../../services/api';
import { Outlet, useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [queryFilm, setQueryFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function onSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.query.value.trim();
    if (searchQuery === '') return;

    searchParams.set('query', searchQuery);
    setSearchParams(searchParams);
    event.target.reset();
  }

  useEffect(() => {
    if (!query) {
      setQueryFilm([]);
      return;
    }

    async function searchFilm() {
      try {
        const data = await movieSearch(query);
        setQueryFilm(data);
      } catch (error) {
        console.log(error);
      }
    }
    searchFilm();
  }, [query]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>
      <MovieList data={queryFilm} />
      <Outlet />
    </div>
  );
}

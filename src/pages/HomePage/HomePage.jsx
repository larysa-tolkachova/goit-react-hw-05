import { useState, useEffect } from 'react';
import { moviesTrending } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    async function getTrend() {
      try {
        const request = await moviesTrending();
        setTrend(request);
      } catch (error) {
        console.log(error);
      }
    }
    getTrend();
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <MovieList data={trend} />
    </div>
  );
}

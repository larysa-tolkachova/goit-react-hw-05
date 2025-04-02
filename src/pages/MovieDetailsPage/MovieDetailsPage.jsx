import { useEffect, useState, useRef } from 'react'; //,
import { movieDetails } from '../../services/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom'; //,

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state);
  console.log(location);
  console.log(goBackRef);

  useEffect(() => {
    async function getDetails() {
      try {
        const request = await movieDetails(movieId);
        setFilm(request);
      } catch (error) {
        console.log(error);
      }
    }

    getDetails();
  }, [movieId]);

  if (!film) return <p>Loading...</p>;

  const img = 'https://image.tmdb.org/t/p/w500/';
  const { title, overview, genres, vote_average, poster_path } = film;

  return (
    <div>
      <Link to={goBackRef.current}>goBack</Link>
      <img src={img + poster_path} alt={title} width={300} />
      <h2>{title}</h2>
      <p>User Score: {vote_average}</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
      <hr />
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

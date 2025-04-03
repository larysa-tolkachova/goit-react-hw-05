import { useEffect, useState, useRef } from 'react'; //,
import { movieDetails } from '../../services/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state);

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
    <div className={css.container}>
      <Link to={goBackRef.current} className={css.goback}>
        goBack
      </Link>
      <div className={css.description}>
        <img src={img + poster_path} alt={title} width={300} />
        <div>
          <h2>{title}</h2>
          <p>User Score: {vote_average}</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <hr />
      <p>Additional information</p>
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

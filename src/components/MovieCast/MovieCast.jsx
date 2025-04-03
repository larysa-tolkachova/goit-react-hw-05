import { useState, useEffect } from 'react';
import { movieDetailsCast } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await movieDetailsCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  const img = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <ul className={css.ul}>
        {cast.map(({ name, id, character, profile_path }) => (
          <li key={id}>
            <img src={img + profile_path} alt={name} width="100" />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

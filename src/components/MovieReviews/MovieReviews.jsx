import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetailsReviews } from '../../services/api';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await movieDetailsReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <ul className={css.ul}>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <b>{author}</b>
            </p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ data }) {
  const location = useLocation();
  return (
    <ul>
      {data.map((item, index) => (
        <li key={`${item.id}-${index}`}>
          <Link to={`/movies/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

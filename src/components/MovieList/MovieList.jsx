export default function MovieList({ trends }) {
  return (
    <ul>
      {trends.map(trend => (
        <li key={trend.id}>{trend.title}</li>
      ))}
    </ul>
  );
}

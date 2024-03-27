export default function JournalHikePlan({ hikePlan }) {
  return (
    <ul className="list-group list-group-flush">
      {hikePlan.map((hike, i) => (
        <li key={i} className="list-group-item">
          {hike.title}
        </li>
      ))}
    </ul>
  );
}

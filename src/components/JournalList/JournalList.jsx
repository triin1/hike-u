import { useState } from "react";

export default function JournalList({ journalList }) {
  const [reverse, setReverse] = useState(false);

  if (journalList.length === 0) {
    <p>No Journal Yet!</p>;
  }

  const list = journalList.map((journal) => (
    <li key={journal._id}>
      <p>{journal.title}</p>
      <p>{journal.user.name}</p>
      <p>{journal.date}</p>
      <p>{journal.difficulty}</p>
      <p>{journal.content}</p>

      <p>{new Date(journal.createdAt).toLocaleString()}</p>
    </li>
  ));

  return (
    <div>
      <button
        onClick={() => {
          setReverse(!reverse);
        }}
      >
        Display descending order
      </button>
      {reverse ? list.reverse() : list}
    </div>
  );
}

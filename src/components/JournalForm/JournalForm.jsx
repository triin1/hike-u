import { useState } from "react";

export default function JournalForm({ addJournal }) {
  const [newJournal, setNewJournal] = useState({
    title: "",
    date: "",
    difficulty: "",
    content: "",
  });

  function handleAddJournal(event) {
    event.preventDefault();
    //send to backend
    addJournal(newJournal);

    setNewJournal({
      title: "",
      date: "",
      difficulty: "",
      content: "",
    });
  }

  return (
    <form onSubmit={handleAddJournal}>
      <label>Title:</label>
      <input
        id="title"
        type="text"
        value={newJournal.title}
        onChange={(event) =>
          setNewJournal({ ...newJournal, title: event.target.value })
        }
      />
      <label>Date:</label>
      <input
        id="date"
        type="date"
        value={newJournal.date}
        onChange={(event) =>
          setNewJournal({ ...newJournal, date: event.target.value })
        }
      />

      <label>Difficulty:</label>
      <select
        id="difficulty"
        value={newJournal.difficulty}
        onChange={(event) =>
          setNewJournal({ ...newJournal, difficulty: event.target.value })
        }
      >
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label>Content:</label>
      <textarea
        id="content"
        value={newJournal.content}
        onChange={(event) =>
          setNewJournal({ ...newJournal, content: event.target.value })
        }
      ></textarea>

      <button type="submit">Add Journal</button>
    </form>
  );
}

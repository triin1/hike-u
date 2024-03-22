import { useState, useEffect } from "react";

import JournalList from "../../components/JournalList/JournalList";
import { getJournal } from "../../utilities/journals-api";
import { Link } from "react-router-dom";

export default function JournalPage() {
  const [journalList, setJournalList] = useState([]);

  // async function handleDelete(noteId) {
  //   try {
  //     await deleteNote(noteId);
  //     //filter out deleted note id
  //     const updatedNotes = noteList.filter((n) => n._id !== noteId);
  //     setNoteList(updatedNotes);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    (async () => {
      try {
        const journals = await getJournal();
        setJournalList(journals);
      } catch (err) {
        console.log("loadding journal errors", err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Journal</h1>
      {/* going to create journal form page !!! */}
      <Link to="/journals/new">
        <button>Create Journal</button>
      </Link>

      <JournalList journalList={journalList} />
    </div>
  );
}

import { useState, useEffect } from "react";
import { deleteJournal } from "../../utilities/journals-api";
import JournalList from "../../components/JournalList/JournalList";
import { getJournal } from "../../utilities/journals-api";
import { Link } from "react-router-dom";

export default function JournalPage() {
  const [journalList, setJournalList] = useState([]);

  async function handleDelete(journalId) {
    try {
      await deleteJournal(journalId);
      //filter out deleted note id
      const updatedJournals = journalList.filter((j) => j._id !== journalId);
      setJournalList(updatedJournals);
    } catch (err) {
      console.log(err);
    }
  }

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
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* going to create journal form page !!! */}
          <Link to="/journals/new">
            <button>Create Journal</button>
          </Link>

          <JournalList journalList={journalList} handleDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
}

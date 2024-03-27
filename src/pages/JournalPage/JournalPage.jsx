import { useState, useEffect } from "react";
import { deleteJournal } from "../../utilities/journals-api";
import JournalList from "../../components/JournalList/JournalList";
import { getJournal } from "../../utilities/journals-api";
import { Link, useLocation } from "react-router-dom";

export default function JournalPage() {
  const [journalList, setJournalList] = useState([]);

  const location = useLocation();

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

  //fetch all journals when page loaded
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

  //fetch searched journals when input searchTerm
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    try {
      async function fetchSearchedResult() {
        const journals = await getJournal(searchTermFromUrl);
        setJournalList(journals);
      }
      fetchSearchedResult();
      console.log("get search results");
    } catch (err) {
      console.log("find searched journal", err);
    }
  }, [location.search]);

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          {/* going to create journal form page !!!
          <Link to="/journals/new">
            <button>Create Journal</button>
          </Link> */}

          <JournalList journalList={journalList} handleDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
}

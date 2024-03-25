import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getJournal } from "../../utilities/journals-api";

export default function JournalSearchPage() {
  const [journalList, setJournalList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
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
    }
  }, [location.search]);

  return (
    <>
      {journalList.map((journal, index) => (
        <p key={index}>{journal.title}</p>
      ))}
    </>
  );
}

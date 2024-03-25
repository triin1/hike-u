// import { createJournal } from "../../utilities/journals-api";
import JournalEditForm from "../../components/JournalEditForm/JournalEditForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneJournal } from "../../utilities/journals-api";
import { updateJournal } from "../../utilities/journals-api";

export default function JournalEditPage() {
  const { id } = useParams();
  const [fetchedJournal, setFetchedJournal] = useState(null);

  useEffect(() => {
    async function getJournal() {
      try {
        //send to Backend
        const fetchedJournal = await getOneJournal(id);
        console.log("JournalEditPage", fetchedJournal);
        setFetchedJournal(fetchedJournal);
      } catch (err) {
        console.log("create jouranl", err);
      }
    }
    getJournal();
  }, [id]);

  async function handleUpdateJournal(journal) {
    try {
      //utilities api
      await updateJournal(journal);
    } catch (err) {
      console.log("updated journal", err);
    }
  }

  // ensure the data is loaded before rendering JournalEditForm
  if (!fetchedJournal) return <div>loading....</div>;

  return (
    <div>
      <JournalEditForm
        fetchedJournal={fetchedJournal}
        handleUpdateJournal={handleUpdateJournal}
      />
    </div>
  );
}

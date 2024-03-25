import JournalDetail from "../../components/JournalDetail/JournalDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneJournal } from "../../utilities/journals-api";

export default function JournalDetailPage() {
  const [journalDetail, setJournalDetail] = useState("");

  // to your path "/journals/:id".
  const { id } = useParams();

  useEffect(() => {
    async function getJournal() {
      try {
        //send to Backend
        const oneJournal = await getOneJournal(id);

        setJournalDetail(oneJournal);
      } catch (err) {
        console.log("create jouranl", err);
      }
    }
    getJournal();
  }, [id]);

  return (
    <div>
      <JournalDetail journalDetail={journalDetail} />
    </div>
  );
}

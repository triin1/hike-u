import JournalDetail from "../../components/JournalDetail/JournalDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneJournal } from "../../utilities/journals-api";

export default function JournalDetailPage() {
  const [journalDetail, setJournalDetail] = useState("");

  // When using useParams, you have to match the destructure let { postId } = useParams();
  // to your path "/view/:postId".
  const { id } = useParams();

  useEffect(() => {
    async function getJournal() {
      try {
        //send to Backend
        console.log("loading journal", id);
        const oneJournal = await getOneJournal(id);
        console.log("oneJournal", oneJournal);
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

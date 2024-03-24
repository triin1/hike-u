import { createJournal } from "../../utilities/journals-api";
import JournalForm from "../../components/JournalForm/JournalForm";
import { useJournalContext } from "../JournalPage/JournalContext";

export default function JournalFormPage() {
  const { addJournalToList } = useJournalContext();

  async function addJournal(journal) {
    try {
      //send to Backend
      await createJournal(journal);
      addJournalToList(journal);
    } catch (err) {
      console.log("create jouranl", err);
    }
  }

  return (
    <div>
      <JournalForm addJournal={addJournal} />
    </div>
  );
}

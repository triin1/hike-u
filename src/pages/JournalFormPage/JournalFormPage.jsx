import { createJournal } from "../../utilities/journals-api";
import JournalForm from "../../components/JournalForm/JournalForm";

export default function JournalFormPage() {
  async function addJournal(journal) {
    try {
      //send to Backend
      await createJournal(journal);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Leave your memory</h1>

      <JournalForm addJournal={addJournal} />
    </div>
  );
}

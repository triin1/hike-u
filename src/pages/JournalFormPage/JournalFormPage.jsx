import { createJournal } from "../../utilities/journals-api";
import JournalForm from "../../components/JournalForm/JournalForm";
import NavBar from "../../components/NavBar/NavBar";

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
      <JournalForm addJournal={addJournal} />
    </div>
  );
}

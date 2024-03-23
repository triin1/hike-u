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
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1>Leave your memory</h1>
          <JournalForm addJournal={addJournal} />
        </main>
      </div>
    </div>
  );
}

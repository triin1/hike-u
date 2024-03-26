import { createJournal } from "../../utilities/journals-api";
import JournalForm from "../../components/JournalForm/JournalForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JournalFormPage() {
  async function addJournal(journal) {
    try {
      //send to Backend
      await createJournal(journal);

      toast.success("Success Notification !", {
        position: "top-center",
      });
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

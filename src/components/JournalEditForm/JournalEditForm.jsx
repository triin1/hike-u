import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JournalEditForm({
  fetchedJournal,
  handleUpdateJournal,
}) {
  const [editJournal, setEditJournal] = useState(fetchedJournal);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await handleUpdateJournal(editJournal);

      toast.success("Success Notification !", {
        position: "top-center",
      });

      console.log("Journal updated successfully!");
    } catch (error) {
      console.error("Error updating journal:", error);
    }
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  value={editJournal?.title}
                  onChange={(event) =>
                    setEditJournal({
                      ...editJournal,
                      title: event.target.value,
                    })
                  }
                />
              </div>

              <div className="row g-3">
                {/* <div className="col-6">
                  <label className="form-label">Hiking Date</label>
                  <input
                    className="form-control"
                    id="date"
                    type="date"
                    value={fetchedJournal?.date}
                    onChange={(event) =>
                      setFetchedJournal({
                        ...fetchedJournal,
                        date: event.target.value,
                      })
                    }
                  />
                </div> */}

                <div className="col-6">
                  <label className="form-label">Difficulty</label>
                  <select
                    className="form-select form-control"
                    id="difficulty"
                    value={editJournal?.difficulty}
                    onChange={(event) =>
                      setEditJournal({
                        ...editJournal,
                        difficulty: event.target.value,
                      })
                    }
                  >
                    <option value="">Select Hiking Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              <div className="col-12 space-between">
                <label className="form-label">Content</label>
                <br />
                <div>
                  <div className="mb-5">
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="4"
                      id="content"
                      value={editJournal?.content}
                      onChange={(event) =>
                        setEditJournal({
                          ...editJournal,
                          content: event.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-dark">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import "./JournalForm.css";

export default function JournalForm({ addJournal }) {
  const [newJournal, setNewJournal] = useState({
    title: "",
    image: "",
    date: "",
    difficulty: "",
    content: "",
  });

  function handleAddJournal(event) {
    event.preventDefault();
    //send to backend
    const formData = new FormData();
    formData.append("title", newJournal.title);
    formData.append("image", newJournal.image);
    formData.append("date", newJournal.date);
    formData.append("difficulty", newJournal.difficulty);
    formData.append("content", newJournal.content);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    addJournal(formData);

    setNewJournal({
      title: "",
      image: "",
      date: "",
      difficulty: "",
      content: "",
    });
  }

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Hiking Journal</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead">Leave your memory</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleAddJournal}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  value={newJournal.title}
                  onChange={(event) =>
                    setNewJournal({ ...newJournal, title: event.target.value })
                  }
                />
              </div>

              <div className="col-12">
                <label>Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={(event) =>
                    setNewJournal({
                      ...newJournal,
                      image: event.target.files[0],
                    })
                  }
                  accept="image/*"
                />
              </div>
              <div className="row g-3">
                <div className="col-6">
                  <label className="form-label">Hiking Date</label>
                  <input
                    className="form-control"
                    id="date"
                    type="date"
                    value={newJournal.date}
                    onChange={(event) =>
                      setNewJournal({ ...newJournal, date: event.target.value })
                    }
                  />
                </div>

                <div className="col-6">
                  <label className="form-label">Difficulty</label>
                  <select
                    className="form-select form-control"
                    id="difficulty"
                    value={newJournal.difficulty}
                    onChange={(event) =>
                      setNewJournal({
                        ...newJournal,
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
                      value={newJournal.content}
                      onChange={(event) =>
                        setNewJournal({
                          ...newJournal,
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
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

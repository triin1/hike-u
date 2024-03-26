import { Link } from "react-router-dom";
import "./JournalListItem.css";
// import { Trash } from "bootstrap-icons-react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function JournalListItem({ journal, handleDelete }) {
  return (
    <div className="col" key={journal._id}>
      <div className="card mb-3 no-border" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex pt-5 justify-content-center">
            <div className="image-container">
              <img
                src={journal.image ? journal.image : "./images/test.jpg"}
                className="img-fluid rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="hikingImage"
              />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h2 className="card-title content-title">{journal.title}</h2>

              <p className="card-text">
                <small className="text-muted">
                  {new Date(journal.date).toLocaleDateString()} |{" "}
                  {journal.user.name} | {journal.difficulty}
                </small>
              </p>

              <p className="card-text">{journal.content}</p>

              <p>
                <Link to={`/journals/${journal._id}`} className="btn-custom">
                  Read More &gt;&gt;
                </Link>
              </p>

              <p className="card-text">
                <small className="text-muted">
                  Last updated{" "}
                  {new Date(journal.updatedAt).toLocaleDateString()}
                </small>

                {/* delelte journal */}
                <button
                  type="submit"
                  className="btn btn-link btn-sm delete-button"
                  style={{ color: "gray" }}
                  aria-label="Close"
                  onClick={() => handleDelete(journal._id)}
                >
                  Delete
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

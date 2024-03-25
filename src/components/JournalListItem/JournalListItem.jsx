import { Link } from "react-router-dom";

export default function JournalListItem({ journal, handleDelete }) {
  return (
    <div className="col" key={journal._id}>
      <div className="card mb-3 no-border" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="image-container">
              <img
                src={journal.image ? journal.image : "./images/test.jpg"}
                className="img-fluid rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="hikingImage"
              />
            </div>
          </div>
          <div className="col-md-8">
            {/* delelte journal */}
            <button
              type="submit"
              className="btn-close btn-close-dark position-absolute top-0 end-0 mt-2 me-2"
              aria-label="Close"
              onClick={() => handleDelete(journal._id)}
            ></button>

            <div className="card-body">
              <h5 className="card-title">{journal.title}</h5>

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
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

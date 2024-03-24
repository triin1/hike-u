/* eslint-disable jsx-a11y/img-redundant-alt */
import "./JournalDetail.css";

export default function JournalDetail({ journalDetail }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card no-border">
            <img
              src={journalDetail.image}
              className="card-img-top"
              alt="Journal Image"
            />
            <div className="card-body">
              <h1 className="card-title text-center mb-4">
                {journalDetail.title}
              </h1>
              <p className="card-text text-center">
                <small className="text-muted">
                  By {journalDetail.user?.name} |{" "}
                  {new Date(journalDetail.date).toDateString()} | Difficulty:{" "}
                  {journalDetail.difficulty}
                </small>
              </p>

              <p className="card-text">{journalDetail.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./JournalList.css";
import { Link } from "react-router-dom";

export default function JournalList({ journalList, handleDelete }) {
  const [reverse, setReverse] = useState(false);

  if (journalList.length === 0) {
    <p>No Journal Yet!</p>;
  }

  //map throught all journal in the list
  const list = journalList.map((journal) => (
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
  ));

  return (
    <div>
      <div className="row d-flex">
        {/* middle part */}
        <div className="col-xl-9 py-5 px-md-5">
          <div class="row">
            <h1 class="display-5 fw-bold">Journal</h1>
          </div>
          <button
            onClick={() => {
              setReverse(!reverse);
            }}
          >
            Display descending order
          </button>
          {/* card display */}
          <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-2 g-4 justify-content-center">
            {reverse ? list.reverse() : list}
          </div>
        </div>

        {/* right side */}
        <div className="col-xl-3 ftco-animate bg-light pt-5 fadeInUp ftco-animated journalSideBar">
          {/* search bar */}
          <div className="sidebar-box pt-md-4">
            <form action="#" className="search-form">
              <div className="form-group">
                <span className="icon icon-search"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a keyword and hit enter"
                />
              </div>
            </form>
          </div>

          {/* Achives */}
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
            <h3 className="sidebar-heading">Archives</h3>
            <ul class="categories">
              <li>
                <a href="#">
                  Decob14 2018 <span>(10)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

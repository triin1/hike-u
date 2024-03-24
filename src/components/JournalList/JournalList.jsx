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
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={journal.image ? journal.image : "./images/test.jpg"}
              className="img-fluid rounded-start"
              alt="hikingImage"
            />
          </div>
          <div className="col-md-8">
            {/* delelte journal */}
            <button
              type="submit"
              className="btn-close btn-close-dark"
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
                  {new Date(journal.updatedAt).toLocaleDateString("en-GB")}
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
        <div className="col-xl-8 py-5 px-md-5">
          <h1>Journal</h1>
          <button
            onClick={() => {
              setReverse(!reverse);
            }}
          >
            Display descending order
          </button>
          {/* card display */}
          <div className="row row-cols-1 g-4">
            {reverse ? list.reverse() : list}
          </div>
        </div>

        {/* right side */}
        <div className="col-xl-4 ftco-animate bg-light pt-5 fadeInUp ftco-animated journalSideBar">
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

          {/* latest post */}
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
            <h3 className="sidebar-heading">Popular Articles</h3>
            <div className="block-21 mb-4 d-flex">
              <div className="text">
                <h3 className="heading">
                  Even the all-powerful Pointing has no control
                </h3>
                <div className="meta">
                  <div>
                    <span className="icon-calendar"></span> June 28, 2019
                  </div>
                  <div>
                    <span className="icon-person"></span> Dave Lewis
                  </div>
                  <div>
                    <span className="icon-chat"></span> 19
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

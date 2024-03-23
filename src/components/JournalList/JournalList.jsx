import { useState } from "react";
import "./JournalList.css";

export default function JournalList({ journalList, handleDelete }) {
  const [reverse, setReverse] = useState(false);

  if (journalList.length === 0) {
    <p>No Journal Yet!</p>;
  }

  const list = journalList.map((journal) => (
    <div class="col" key={journal._id}>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="./images/test.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            {/* delelte journal */}
            <button
              type="submit"
              class="btn-close btn-close-dark"
              aria-label="Close"
              onClick={() => handleDelete(journal._id)}
            ></button>

            <div class="card-body">
              <h5 class="card-title">{journal.title}</h5>

              <p class="card-text">
                <small class="text-muted">
                  {new Date(journal.date).toLocaleDateString()} |{" "}
                  {journal.user.name} | {journal.difficulty}
                </small>
              </p>

              <p class="card-text">{journal.content}</p>

              <p>
                <a href="#" class="btn-custom">
                  Read More <span class="ion-ios-arrow-forward"></span>
                </a>
              </p>

              <p class="card-text">
                <small class="text-muted">
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
          <div class="row row-cols-1 g-4">
            {reverse ? list.reverse() : list}
          </div>
        </div>

        {/* right side */}
        <div className="col-xl-4 ftco-animate bg-light pt-5 fadeInUp ftco-animated journalSideBar">
          {/* search bar */}
          <div class="sidebar-box pt-md-4">
            <form action="#" class="search-form">
              <div class="form-group">
                <span class="icon icon-search"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type a keyword and hit enter"
                />
              </div>
            </form>
          </div>

          {/* latest post */}
          <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
            <h3 class="sidebar-heading">Popular Articles</h3>
            <div class="block-21 mb-4 d-flex">
              <div class="text">
                <h3 class="heading">
                  Even the all-powerful Pointing has no control
                </h3>
                <div class="meta">
                  <div>
                    <span class="icon-calendar"></span> June 28, 2019
                  </div>
                  <div>
                    <span class="icon-person"></span> Dave Lewis
                  </div>
                  <div>
                    <span class="icon-chat"></span> 19
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

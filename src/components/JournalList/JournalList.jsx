import { useState } from "react";
import "./JournalList.css";
import { Link } from "react-router-dom";
import Achive from "../Achive/Achive";
import JournalSearch from "../JournalSearch/JournalSearch";

export default function JournalList({ journalList, handleDelete }) {
  const [reverse, setReverse] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  if (journalList.length === 0) {
    <p>No Journal Yet!</p>;
  }

  // category setting
  const monthYear = journalList.map((j) => {
    const date = new Date(j.date);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    return { month, year };
  });
  const uniqueMonthYear = monthYear.filter((item, index, array) => {
    // Find the index of the first occurrence of the current item
    const firstIndex = array.findIndex(
      (obj) => obj.month === item.month && obj.year === item.year
    );
    // Return whether the current index is equal to the first index
    return index === firstIndex;
  });
  function handleDateSelect(index) {
    const selectedMonthYear = uniqueMonthYear[index];
    if (
      selectedDate &&
      selectedDate.month === selectedMonthYear.month &&
      selectedDate.year === selectedMonthYear.year
    ) {
      // Clear the selected date to revert back to original list
      setSelectedDate(null);
    } else {
      setSelectedDate(selectedMonthYear);
    }
  }

  const filteredJournalList = selectedDate
    ? journalList.filter((journal) => {
        const journalDate = new Date(journal.date);
        const journalMonth = journalDate.toLocaleString("default", {
          month: "long",
        });
        const journalYear = journalDate.getFullYear();

        return (
          journalMonth === selectedDate.month &&
          journalYear === selectedDate.year
        );
      })
    : journalList;

  //map throught all journal in the list (include "delete" button)
  const list = filteredJournalList.map((journal) => (
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
          <div className="row">
            <h1 className="display-5 fw-bold">Journal</h1>
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
        {/* search bar */}
        <div className="col-xl-3 ftco-animate bg-light pt-5 fadeInUp ftco-animated journalSideBar">
          <JournalSearch />

          {/* Achives */}
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
            <Achive
              uniqueMonthYear={uniqueMonthYear}
              selectedDate={selectedDate}
              handleDateSelect={handleDateSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

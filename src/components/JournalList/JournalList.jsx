import { useState } from "react";
import "./JournalList.css";
import Achive from "../Achive/Achive";
import JournalSearch from "../JournalSearch/JournalSearch";
import JournalListItem from "../JournalListItem/JournalListItem";

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
  const list = filteredJournalList.map((journal, i) => (
    <JournalListItem key={i} journal={journal} handleDelete={handleDelete} />
  ));

  return (
    <div>
      <div className="row d-flex">
        {/* middle part */}
        <div className="col-xl-8 py-5 px-md-5">
          <div className="row">
            <h1 className="display-5 fw-bold">Journal</h1>
          </div>

          {/* display descending order */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-light "
              onClick={() => {
                setReverse(!reverse);
              }}
            >
              Ascend ▲
            </button>
          </div>

          {/* card display */}
          <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-2 g-4 justify-content-center">
            {reverse ? list.reverse() : list}
          </div>
        </div>

        {/* right side */}
        <div className="col-xl-3 ftco-animate bg-light pt-5 fadeInUp ftco-animated journalSideBar">
          {/* search bar */}
          <div className="row row-3 search-bar">
            <JournalSearch />
          </div>
          {/* Achives */}
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated row-cols-md-1">
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

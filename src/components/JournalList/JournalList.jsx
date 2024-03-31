import { useState } from "react";
import "./JournalList.css";
import JournalListItem from "../JournalListItem/JournalListItem";

export default function JournalList({ filteredJournalList, handleDelete }) {
  const [reverse, setReverse] = useState(false);

  if (filteredJournalList.length === 0) {
    <p>No Journal Yet!</p>;
  }

  //map throught all journal in the list (include "delete" button)
  const list = filteredJournalList.map((journal, i) => (
    <JournalListItem key={i} journal={journal} handleDelete={handleDelete} />
  ));

  return (
    <div>
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
  );
}

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getJournal } from "../../utilities/journals-api";

export default function JournalSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [journalList, setJournalList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  function handleSearchSubmit(event) {
    event.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);

    const searchQuery = urlParams.toString();
    navigate(`/journals/search?${searchQuery}`);
  }

  return (
    <form onSubmit={handleSearchSubmit} className="search-form">
      <div className="form-group">
        <span className="icon icon-search"></span>
        <input
          id="searchTerm"
          type="text"
          className="form-control"
          placeholder="Type a keyword and hit enter"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
}

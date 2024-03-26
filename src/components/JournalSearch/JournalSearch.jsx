import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JournalSearch.css";

export default function JournalSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function handleSearchSubmit(event) {
    event.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", searchTerm);

    const searchQuery = urlParams.toString();
    //App->Route
    navigate(`/journal?${searchQuery}`);
  }

  function clearSearchTerm() {
    setSearchTerm("");
    // Update URL to remove search term query parameter
    const url = new URL(window.location.href);
    url.searchParams.delete("searchTerm");
    navigate("/journal");
  }

  return (
    <form onSubmit={handleSearchSubmit} className="search-form">
      <div className="form-group">
        <div className="input-group">
          <input
            id="searchTerm"
            type="text"
            className="form-control focus-shadow-none border-0 me-1"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              className="btn btn-light focus-shadow-none mb-0 border-none"
              type="button"
              onClick={clearSearchTerm}
            >
              X
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

import { useState } from "react";
import "./HikeStopsForm.css";

export default function HikeStopsForm({
  addNewStop,
  stops,
  setStops,
  hike,
  setHike,
}) {
  const [newStop, setNewStop] = useState("");

  function _handleNewStop(event) {
    event.preventDefault();
    // addNewStop(newStop);
    setHike({ ...hike, spots: [...stops, newStop] });
    setStops([...stops, newStop]);
    console.log(newStop);
    setNewStop("");
  }

  function _handleChange(event) {
    // setNewStop({...newStop,
    //     [event.target.name]: event.target.value});
    setNewStop(event.target.value);
  }

  return (
    // <form className="row row-3 search-bar" onSubmit={_handleNewStop}>
    //   <label>A stop at some spots?</label>
    //   <input
    //     name="name"
    //     value={newStop}
    //     onChange={_handleChange}
    //     placeholder="e.g. lookout, lake, etc."
    //   />

    //   <button type="submit">Save</button>
    // </form>

    <form onSubmit={_handleNewStop} className="search-form mb-4">
      <div className="form-group">
        <div className="input-group">
          <input
            id="searchTerm"
            type="text"
            className="form-control focus-shadow-none border-0 me-1"
            placeholder="Some hiking spots?"
            name="name"
            value={newStop}
            onChange={_handleChange}
          />

          <button
            className="btn btn-light focus-shadow-none mb-0 border-none"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

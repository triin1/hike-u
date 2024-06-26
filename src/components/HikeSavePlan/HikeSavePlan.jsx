import * as hikeAPI from "../../utilities/hikes-api";
import "./HikeSavePlan.css";

function HikeSavePlan({ getHikeState }) {
  const _handleSaveHikePlan = () => {
    const hike = getHikeState()
    if (hike.startLocation && hike.endLocation && hike.startDate && hike.endDate && hike.title !== "" ) {
      hikeAPI.saveHikePlan(getHikeState());
    } else {
      alert("Please fulfill the empty area")
    }
    
    ///api/hikes/hike start with
  };

  return (
    <button className="btn btn-success btn-save" onClick={_handleSaveHikePlan}>
      <a className="savehike" href="/">
        Save Hike Plan
      </a>
    </button>
  );
}

export default HikeSavePlan;

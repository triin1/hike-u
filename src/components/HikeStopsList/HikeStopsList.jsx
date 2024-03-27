import { useEffect, useState } from "react";
import HikeStopsForm from "../HikeStopsForm/HikeStopsForm";
import HikeStopItem from "../HikeStopItem/HikeStopItem";
// import * as spotsAPI from "../../utilities/hikes-api";
import * as hikesAPI from "../../utilities/hikes-api";

export default function HikeStopsList({ hike, setHike }) {
  const [stops, setStops] = useState([]);

  async function addNewStop(newSpot) {
    try {
      console.log(newSpot);
      const addSpot = await hikesAPI.saveHikePlan(newSpot);
      setStops([...stops, addSpot]);
    } catch (err) {
    }
  }

  // useEffect(() => {
  //     spotsAPI.getSpots().then((stops) => {
  //         setStops(stops);
  //     });
  // }, []);

  // useEffect(() => {
  //     hikesAPI.saveHikePlan().then((stops) => {
  //         setStops(stops);
  //     });
  // }, [])

  const hikeStopItems = stops.map((stop, index) => (
    <HikeStopItem stop={stop} key={index} index={index} />
  ));


  return (
    <div>
      <h3>Stops</h3>
      <HikeStopsForm
        addNewStop={addNewStop}
        stops={stops}
        setStops={setStops}
        hike={hike}
        setHike={setHike}
      />
      <ol className="list-group list-group-numbered">{hikeStopItems}</ol>
    </div>
  );
}

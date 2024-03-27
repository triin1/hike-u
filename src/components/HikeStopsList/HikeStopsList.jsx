import { useState, useEffect } from "react";
import HikeStopsForm from "../HikeStopsForm/HikeStopsForm";
import HikeStopItem from "../HikeStopItem/HikeStopItem";
// import * as spotsAPI from "../../utilities/hikes-api";
import * as hikesAPI from "../../utilities/hikes-api"

export default function HikeStopsList({ hike, setHike }) {

    const [stops, setStops] = useState([]);

    async function addNewStop(newSpot) {
        try {
            console.log(newSpot);
            const addSpot = await hikesAPI.saveHikePlan(newSpot);
            setStops([...stops, addSpot]);

        } catch (err) {
            console.log('stop not added', err);
        }
    };

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
        <HikeStopItem stop={stop} key={index} index={index}/>
    ));


console.log(hikeStopItems);

    return (
        <div>
            <h1>Stops</h1>
            <HikeStopsForm addNewStop={addNewStop} stops={stops} setStops={setStops} hike={hike} setHike={setHike} />
            <ul>{hikeStopItems}</ul>
        </div>
    )
}
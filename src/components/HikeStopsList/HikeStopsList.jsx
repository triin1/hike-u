import { useState } from "react";
import HikeStopsForm from "../HikeStopsForm/HikeStopsForm";
import HikeStopItem from "../HikeStopItem/HikeStopItem";

export default function HikeStopsList() {

    const [stops, setStops] = useState([]);

    function addNewStop(newStop) {
        setStops([...stops, newStop]);
    }

    const hikeStopItems = stops.map((stop, index) => (
        <HikeStopItem stop={stop} key={index}/>
    ));

    return (
        <div>
            <h1>Stops</h1>
            <HikeStopsForm addNewStop={addNewStop} />
            <ul>{hikeStopItems}</ul>
        </div>
    )
}
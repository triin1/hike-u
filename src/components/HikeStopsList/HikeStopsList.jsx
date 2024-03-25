import { useState } from "react";
import HikeStopsForm from "../HikeStopsForm/HikeStopsForm";
import HikeStopItem from "../HikeStopItem/HikeStopItem";
import * as spotsAPI from "../../utilities/hikes-api";

export default function HikeStopsList() {

    const [stops, setStops] = useState([
        {
            name: ''
        }
    ]);

    async function addNewStop(newSpot) {
        try {
            const addSpot = await spotsAPI.createSpot({newSpot});
            setStops([...stops, addSpot]);

        } catch (err) {
            console.log('stop not added', err);
        }
    }

    const hikeStopItems = stops.map((stop, index) => (
        <HikeStopItem stop={stop.name} key={index} index={index}/>
    ));

    return (
        <div>
            <h1>Stops</h1>
            <HikeStopsForm addNewStop={addNewStop} stops={stops} />
            <ul>{hikeStopItems}</ul>
        </div>
    )
}
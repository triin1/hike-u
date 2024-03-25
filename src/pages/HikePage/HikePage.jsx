import { useState } from "react";
import HikeStopsList from "../../components/HikeStopsList/HikeStopsList";
import HikeDetails from "../../components/HikeDetails/HikeDetails";
import HikeMap from "../../components/HikeMap/HikeMap";

function HikePage() {

    const [hike, setHike] = useState([]);
    // state probably needs to be passed as props to HikeMap page
    // then to other children from there

    return (
        <div>
        <HikeMap/>
        <HikeStopsList />
        <HikeDetails />
        </div>
    )
}

export default HikePage;
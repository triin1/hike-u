import { useState } from "react";
import HikeStops from "../../components/HikeStops/HikeStops";
import HikeDetails from "../../components/HikeDetails/HikeDetails";

function HikePage() {

    const [hike, setHike] = useState([]);
    // state probably needs to be passed as props to HikeMap page
    // then to other children from there

    return (
        <div>
            {/* HikeMap API */}
        <HikeStops />
        <HikeDetails />
        </div>
    )
}

export default HikePage;
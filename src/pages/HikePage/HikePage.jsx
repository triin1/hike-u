import { useState, useEffect } from "react";
import HikeStopsList from "../../components/HikeStopsList/HikeStopsList";
import HikeDetails from "../../components/HikeDetails/HikeDetails";
import HikeMap from "../../components/HikeMap/HikeMap";
import HikeDescription from "../../components/HikeDescription/HikeDescription";
import * as hikesAPI from "../../utilities/hikes-api";

function HikePage() {

    // state probably needs to be passed as props to HikeMap page
    // then to other children from there
    const [hike, setHike] = useState({
        distance: 0,
        startLocation: [],
        endLocation: [],
        title: "",
        description: ""
    });

    // Used to update the hike state, the newValue must be an object
    const updateHikeState = (newValue) => {
        const hikeCopy = {...hike, ...newValue}
        setHike(hikeCopy)
    }

    useEffect(() => {
        console.log(hike)
    }, [hike])

    return (
        <div>
            <HikeMap updateHikeState = {updateHikeState} />
            <HikeDescription updateHikeState = {updateHikeState} />
            <HikeStopsList />
            <HikeDetails />
        </div>
    )
}

export default HikePage;
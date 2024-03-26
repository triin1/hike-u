import { useState, useEffect } from "react";
import HikeStopsList from "../../components/HikeStopsList/HikeStopsList";
import HikeDetails from "../../components/HikeDetails/HikeDetails";
import HikeMap from "../../components/HikeMap/HikeMap";
import HikeDescription from "../../components/HikeDescription/HikeDescription";
import HikeDate from "../../components/HikeDate/HikeDate";
import HikeWeatherForecast from "../../components/HikeWeatherForecast/HikeWeatherForecast";
import { getWeather } from "../../utilities/weather-api";
import * as hikesAPI from "../../utilities/hikes-api";

function HikePage() {

    // state probably needs to be passed as props to HikeMap page
    // then to other children from there
    const [hike, setHike] = useState({
        distance: 0,
        startLocation: null,
        endLocation: null,
        title: "",
        description: "",
        startDate: null,
        endDate: null,
        equipments: []
    });

    const [forecast, setForecast] = useState(null)

    // Used to update the hike state, the newValue must be an object
    const updateHikeState = (newValue) => {
        const hikeCopy = { ...hike }
        const newHike = { ...hikeCopy, ...newValue }
        setHike(newHike)
    }

    // used to fetch the weather forecast
    useEffect(() => {
        async function getWeatherForecast() {
            if (hike.startLocation && hike.endLocation) {
                const weatherForecast = await getWeather(hike.startLocation, hike.endLocation)
                setForecast(weatherForecast)
            }
        }
        getWeatherForecast()
    }, [hike.startLocation, hike.endLocation])

    return (
        <div>
            <div className="d-flex flex-row" >
                <HikeMap updateHikeState={updateHikeState} />
                <HikeWeatherForecast forecast={forecast} />
            </div>
            <HikeDescription updateHikeState={updateHikeState} />
            <HikeDate updateHikeState={updateHikeState} hike={hike} />
            <HikeStopsList />
            <HikeDetails />
            <button>Save Hike Plan</button>
        </div>
    )
}

export default HikePage;
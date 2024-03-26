import { DateRange } from "react-date-range";
import { useState, useEffect } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { getWeather } from "../../utilities/weather-api";

function HikeWeather({ updateHikeState, hike }) {

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    useEffect(() => {
        async function getWeatherForcast() {
            if (hike.startLocation && hike.endLocation) {
                const weatherForcast = await getWeather(hike.startLocation, hike.endLocation)
                console.log(weatherForcast)
            }
        }
        getWeatherForcast()
    }, [hike.startLocation, hike.endLocation])

    return (
        <div className="mb-3">
            <label className="form-label">Select date</label>
            <div>
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                />
            </div>
        </div>

    )
}

export default HikeWeather
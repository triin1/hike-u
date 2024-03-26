import { useState, useEffect } from "react";
import HikeWeatherForecastDay from "../HikeWeatherForecastDay/HikeWeatherForecastDay";

function HikeWeatherForecast({ forecast }) {
    const [city, setCity] = useState(null);
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        if (forecast) {
            setCity(forecast.city);
            const newForecasts = Object.entries(forecast.weather).map(([date, weather]) => (
                <HikeWeatherForecastDay
                    key={date}
                    date={date}
                    weather={weather}
                    temp={forecast.temp[date].toString().slice(0, 2)}
                />
            ));
            setForecasts(newForecasts);
        } else {
            setCity(null);
            setForecasts([]);
        }
    }, [forecast]);

    return (
        <div>
            <h5><span className="badge text-bg-secondary">Weather Forecast</span>: {city}</h5>
            <ol className="list-group">
                {forecasts.length !== 0 ? forecasts : <div>No forecast available</div>}
            </ol>
        </div>
    );
}

export default HikeWeatherForecast;

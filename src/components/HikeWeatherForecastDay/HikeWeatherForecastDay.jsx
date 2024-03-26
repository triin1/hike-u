function HikeWeatherForecastDay({ date, weather, temp }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{date}</div>
                {weather}
            </div>
            <span className="badge text-bg-primary rounded-pill">{temp}</span>
        </li>
    )
}

export default HikeWeatherForecastDay
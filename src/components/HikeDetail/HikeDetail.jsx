import { useParams } from "react-router-dom"
import * as hikeAPI from "../../utilities/hikes-api"
import { useEffect, useState, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "./HikeDetail.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import { Link } from "react-router-dom"
import { getWeather } from "../../utilities/weather-api";
import "@mapbox/mapbox-gl-directions/src/mapbox-gl-directions.css"
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import HikeWeatherForecast from "../HikeWeatherForecast/HikeWeatherForecast"

function HikeDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const mapContainer = useRef(null);
    const map = useRef(null);
    const directions = useRef(null);
    const originLocation = useRef(null);
    const destinationLocation = useRef(null);
    const [forecast, setForecast] = useState(null);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        async function getDetail() {
            const hikeDetail = await hikeAPI.getHikeDetail(id)
            setDetail(hikeDetail)
            originLocation.current = hikeDetail?.startLocation;
            destinationLocation.current = hikeDetail?.endLocation;
            if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: hikeDetail?.startLocation,
                zoom: zoom
            });

            directions.current = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                unit: 'metric',
                profile: 'mapbox/walking',
            });

            // use those function to set route
            directions.current.setOrigin(originLocation.current)
            directions.current.setDestination(destinationLocation.current)

            map.current.addControl(directions.current, 'top-left');
            if (originLocation.current && destinationLocation.current) {
                const weatherForecast = await getWeather(
                    originLocation.current,
                    destinationLocation.current
                );
                setForecast(weatherForecast);
            }
        }
        getDetail()
    }, [])

    return (
        <div className="detail-container" >
            <div className="detail-title" >Your Hike: {detail.title}</div>
            <div className="map-weather-container" >
                <div ref={mapContainer} className="map-container" />
                <HikeWeatherForecast forecast={forecast} />
            </div>
            <div className="date-container" >
                {detail.startDate && <div>Start Date: {detail.startDate.toString().slice(0, 10)}</div>}
                {detail.endDate && <div>End Date: {detail.endDate.toString().slice(0, 10)}</div>}
            </div>
            <div className="divider" ></div>
            <div className="description" >Desctiption: </div>
            <div className="description-container" >  {detail.description}</div>

            <div className="list-container" >
                {detail.spots && <div> <div className="list-title" >Your Spots:</div> <ul className="list-group list-group-flush" >{detail.spots.map((spot, index) => <li className="list-group-item" key={index} >{spot}</li>)}</ul></div>}
                {detail.equipments && <div> <div className="list-title" >Your Equipments:</div> <ul className="list-group list-group-flush" >{detail.equipments.map((equipment, index) => <li className="list-group-item" key={index} >{equipment}</li>)}</ul></div>}
            </div>
            <div className="btn-container" >
                <Link to="/journals/new"><button className="create-btn" >Create Journal</button></Link>
            </div>
        </div>
    )
}

export default HikeDetail
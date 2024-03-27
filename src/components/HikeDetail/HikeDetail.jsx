import { useParams } from "react-router-dom"
import * as hikeAPI from "../../utilities/hikes-api"
import { useEffect, useState, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "./HikeDetail.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-directions/src/mapbox-gl-directions.css"
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';


function HikeDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const mapContainer = useRef(null);
    const map = useRef(null);
    const directions = useRef(null);
    const originLocation = useRef(null);
    const destinationLocation = useRef(null);
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
        }
        getDetail()
    }, [])
    
    return (
        <div>
            <h2>{detail.title}</h2>
            <div className="map-container" >
                <div ref={mapContainer} className="map-container" />
            </div>
            <div>{detail.description}</div>
            <div>Start Date: {detail.startDate.toString().slice(0, 10)}</div>
            <div>End Date: {detail.endDate.toString().slice(0, 10)}</div>
        </div>
    )
}

export default HikeDetail
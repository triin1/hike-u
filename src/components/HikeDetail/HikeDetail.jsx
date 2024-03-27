import { useParams } from "react-router-dom"
import * as hikeAPI from "../../utilities/hikes-api"
import { useEffect, useState, useRef } from "react"
import mapboxgl from "mapbox-gl"
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
    const routeDistance = useRef(null);
    const destinationLocation = useRef(null);
    const [initialLongtitude, setInitialLongtitude] = useState(151.216454);
    const [initialLatitude, setInitialLatitude] = useState(-33.854816);
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
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default HikeDetail
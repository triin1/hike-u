import { Map, GeolocateControl } from "react-map-gl";
import { useState, useRef, useEffect } from "react"
import "./HikeMap.css"

function HikeMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    // useEffect(() => {
    //     if (map.current) return; // initialize map only once
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v12',
    //         center: [lng, lat],
    //         zoom: zoom
    //     });
    // });
    const token = process.env.REACT_APP_MAPBOXGL_TOKEN
    return (
        <Map
            mapboxAccessToken={token}
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
        <GeolocateControl/>
        </Map>
    );
}

export default HikeMap
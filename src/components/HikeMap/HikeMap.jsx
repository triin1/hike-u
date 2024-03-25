import mapboxgl from "mapbox-gl"
import { useState, useRef, useEffect } from "react"
import "./HikeMap.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-directions/src/mapbox-gl-directions.css"
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_TOKEN

function HikeMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const directions = useRef(null);
    const currentPosition = useRef(null);
    const originLocation = useRef(null);
    const routeDistance = useRef(null);
    const destinationLocation = useRef(null);
    const [initialLongtitude, setInitialLongtitude] = useState(151.216454);
    const [initialLatitude, setInitialLatitude] = useState(-33.854816);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [initialLongtitude, initialLatitude],
            zoom: zoom
        });

        directions.current = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/walking',
        });

        // use those function to set route
        // directions.current.setOrigin([153.023499, -27.468968])
        // directions.current.setDestination([153.055723, -27.575283])

        currentPosition.current = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        })

        map.current.addControl(directions.current, 'top-left');
        map.current.addControl(currentPosition.current, 'bottom-right')
        directions.current.on('route', handleRouteUpdate);

    }, []);

    const handleRouteUpdate = (evt) => {
        console.log(evt.route[0])
        routeDistance.current = evt.route[0].distance
        originLocation.current = directions.current.getOrigin().geometry.coordinates;
        destinationLocation.current = directions.current.getDestination().geometry.coordinates
    };

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default HikeMap
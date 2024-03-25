// import { Map, GeolocateControl, NavigationControl } from "react-map-gl";
// import { useState, useRef, useEffect } from "react"
// import Geocoder from '@mapbox/mapbox-gl-geocoder';
// import "./HikeMap.css"
// import 'mapbox-gl/dist/mapbox-gl.css'

// function HikeMap() {
//     const [viewState, setViewState] = useState({
//         longtitude: 151.1882752,
//         latitude: -33.882112,
//         zoom: 10
//     });

//     useEffect(() => {
//         function setInitialUserLocation() {
//             navigator.geolocation.getCurrentPosition((pos) => {
//                 setViewState({
//                     latitude: pos.coords.latitude,
//                     longitude: pos.coords.longitude,
//                     zoom: 10,
//                 });
//                 console.log(pos.coords.latitude, pos.coords.longitude);
//             });
//         }
//         setInitialUserLocation();
//     }, []);

//     const _handleSelected = () => {

//     }

//     const _hangleOnMove = (evt) => {
//         setViewState(evt.viewState)
//     }

//     const token = process.env.REACT_APP_MAPBOXGL_TOKEN
//     return (
//         <div className="MapBoxWrapper" >
//             <Map
//                 mapboxAccessToken={token}
//                 initialViewState={{
//                     longitude: viewState.longtitude,
//                     latitude: viewState.latitude,
//                     zoom: viewState.zoom
//                 }}
//                 onMove={_hangleOnMove}
//                 style={{ width: 600, height: 400 }}
//                 mapStyle="mapbox://styles/mapbox/streets-v9"
//             >
//                 <GeolocateControl
//                     positionOptions={{ enableHighAccuracy: true }}
//                     trackUserLocation={true}
//                 />
//                 <NavigationControl 
//                     position="top-left"
//                 />

//             </Map>
//         </div>

//     );
// }

// export default HikeMap

// import React from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_TOKEN

// class HikeMap extends React.Component {
//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v10',
//       center: [-73.985664, 40.748514],
//       zoom: 12,
//     });

//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving',
//     });

//     // Directions
//     map.addControl(directions, 'top-left');
//   }
//   render() {
//     return <div className="mapWrapper" id="map" />;
//   }
// }
// export default HikeMap;


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
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
        });

        const currentPosition = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        })

        map.current.addControl(directions, 'top-left');
        map.current.addControl(currentPosition, 'bottom-right')

    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default HikeMap
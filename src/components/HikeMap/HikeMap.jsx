import { Map, GeolocateControl, } from "react-map-gl";
import { useState, useRef, useEffect } from "react"
import "./HikeMap.css"
import 'mapbox-gl/dist/mapbox-gl.css'

function HikeMap() {
    const [viewState, setViewState] = useState({
        longtitude: -122.4,
        latitude: 37.8,
        zoom: 10
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setViewState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                zoom: 3.5,
            });
            console.log(pos.coords.latitude, pos.coords.longitude)
        });
    }, []);

    const _hangleOnMove = (evt) => {
        setViewState(evt.viewState)
    }

    const token = process.env.REACT_APP_MAPBOXGL_TOKEN
    return (
        <div className="MapBoxWrapper" >
            <Map
                mapboxAccessToken={token}
                initialViewState={{
                    longitude: viewState.longtitude,
                    latitude: viewState.latitude,
                    zoom: viewState.zoom
                }}
                onMove={_hangleOnMove}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </Map>
        </div>

    );
}

export default HikeMap
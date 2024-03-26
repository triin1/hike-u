export async function getWeather(startLocation, endLocation) {
    const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY
    console.log(OPEN_WEATHER_KEY)
    const lat1 = startLocation[0]
    const lon1 = startLocation[1]
    const lat2 = endLocation[0]
    const lon2 = endLocation[1]
    const midLocation = calculateMidpoint(lat1, lon1, lat2, lon2)
    console.log(midLocation)
    const weatherAPIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${midLocation.latitude}&lon=${midLocation.longitude}&appid=${OPEN_WEATHER_KEY}`
    const res = await fetch(weatherAPIURL)
    const json = await res.json()
    return json
}

function calculateMidpoint(lat1, lon1, lat2, lon2) {
    const radLat1 = (Math.PI * lat1) / 180;
    const radLon1 = (Math.PI * lon1) / 180;
    const radLat2 = (Math.PI * lat2) / 180;
    const radLon2 = (Math.PI * lon2) / 180;
    const avgLat = (radLat1 + radLat2) / 2;
    const avgLon = (radLon1 + radLon2) / 2;
    const midLat = (avgLat * 180) / Math.PI;
    const midLon = (avgLon * 180) / Math.PI;
    return { latitude: midLon, longitude: midLat };
}

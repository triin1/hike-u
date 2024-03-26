export async function getWeather(startLocation, endLocation) {
    const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY
    const lat1 = startLocation[0]
    const lon1 = startLocation[1]
    const lat2 = endLocation[0]
    const lon2 = endLocation[1]
    const midLocation = _calculateMidpoint(lat1, lon1, lat2, lon2)
    const weatherAPIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${midLocation.latitude}&lon=${midLocation.longitude}&appid=${OPEN_WEATHER_KEY}`
    const res = await fetch(weatherAPIURL)
    const json = await res.json()
    const weatherData = _formatJSONWeatherData(json)
    const tempData = _formatJSONTempData(json)
    const cityData = _formatJSONCityData(json)
    const data = {
        weather: weatherData,
        temp: tempData,
        city: cityData
    }
    return data
}

function _calculateMidpoint(lat1, lon1, lat2, lon2) {
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

function _formatJSONWeatherData(data) {
    const copyData = {...data}
    const weather = {}
    for (let i = 0; i < copyData.list.length; i++) {
        const date = copyData.list[i].dt_txt.slice(0, 10)
        if (!weather[date]) {
            weather[date] = []
        }
        weather[date].push(copyData.list[i].weather[0].main)
    }
    const result = countMostFrequentWeather(weather)
    return result
}

function countMostFrequentWeather(data) {
    const result = {};
    for (const date in data) {
        const weatherCounts = {};
        const weatherList = data[date];
        for (const weather of weatherList) {
            const normalizedWeather = weather.toLowerCase().includes("rain") ? "Rain" : weather;
            weatherCounts[normalizedWeather] = (weatherCounts[normalizedWeather] || 0) + 1;
        }

        let mostFrequentWeather = "";
        let maxCount = 0;
        for (const weather in weatherCounts) {
            if (weather == 'Rain' ) {
                mostFrequentWeather = "Rain"
                break
            }
            if (weatherCounts[weather] > maxCount) {
                mostFrequentWeather = weather;
                maxCount = weatherCounts[weather];
            }
        }
        result[date] = mostFrequentWeather;
    }

    return result
}


function _formatJSONTempData(data) {
    const copyData = {...data}
    const temp = {}
    for (let i = 0; i < copyData.list.length; i++) {
        const date = copyData.list[i].dt_txt.slice(0, 10)
        if (!temp[date]) {
            temp[date] = copyData.list[i].main.temp
        } else {
            temp[date] = (temp[date] + copyData.list[i].main.temp)/2
        }
    }
    for (const property in temp) {
        temp[property] = temp[property] - 270.15
    }
    return temp
}

function _formatJSONCityData(data) {
    const copyData = {...data}
    const location = `${copyData.city.name} ${copyData.city.country}`
    return location
}

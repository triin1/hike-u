import sendRequest from "./send-request";
const BASE_URL = "/api/hikes";

export function createSpot(spotData) {
    console.log(spotData);
    return sendRequest(`${BASE_URL}/spots`, "POST", spotData);
}

export function getSpots() {
    return sendRequest(BASE_URL);
}

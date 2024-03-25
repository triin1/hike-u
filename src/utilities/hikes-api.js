import sendRequest from "./send-request";
const BASE_URL = "/api/hikes";

export function createSpot(spotData) {
    console.log(spotData);
    return sendRequest(`${BASE_URL}`, "POST", spotData);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

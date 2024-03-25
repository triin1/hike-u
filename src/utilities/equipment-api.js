import sendRequest from "./send-request";
const BASE_URL = "/api/equipment";

export function createEquipment(equipmentData) {
    console.log(equipmentData)
    return sendRequest(BASE_URL, "POST", equipmentData)
}

export function getAll() {
    return sendRequest(BASE_URL);
  }

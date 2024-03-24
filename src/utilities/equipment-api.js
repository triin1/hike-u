import sendRequest from "./send-request";
const BASE_URL = "/api/equipment";

export function createEquipment(equipmentData) {
    return sendRequest(BASE_URL, "POST", equipmentData)
}

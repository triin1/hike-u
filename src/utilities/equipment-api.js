import sendRequest from "./send-request";
const BASE_URL = "/api/equipment";

export function createEquipment(equipmentData) {
    return sendRequest(BASE_URL, "POST", equipmentData)
}

export function getAll() {
    return sendRequest(BASE_URL);
  }

  export async function deleteEquipment(id) {
    return sendRequest(`${ BASE_URL }/${ id }`, 'DELETE');
  }
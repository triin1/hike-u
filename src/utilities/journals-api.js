import sendRequest from "./send-request";

const BASE_URL = "/api/journals";

export function createJournal(journalData) {
  return sendRequest(BASE_URL + "/new", "POST", journalData);
}

export function getJournal() {
  return sendRequest(BASE_URL, "GET");
}

export function deleteJournal(journalId) {
  return sendRequest(`${BASE_URL}/${journalId}`, "DELETE");
}

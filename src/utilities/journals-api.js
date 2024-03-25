import sendRequest from "./send-request";
const BASE_URL = "/api/journals";

export function createJournal(journalData) {
  return sendRequest(BASE_URL + "/new", "POST", journalData, true);
}

export function getJournal(searchTerm = "") {
  let url = BASE_URL;
  if (searchTerm) {
    url = `${BASE_URL}?searchTerm=${encodeURIComponent(searchTerm)}`;
  }
  return sendRequest(url, "GET");
}

export function deleteJournal(journalId) {
  return sendRequest(`${BASE_URL}/${journalId}`, "DELETE");
}

export function getOneJournal(journalId) {
  return sendRequest(`${BASE_URL}/${journalId}`, "GET");
}

export function updateJournal(updateJournal) {
  return sendRequest(`${BASE_URL}/${updateJournal._id}`, "PUT", updateJournal);
}

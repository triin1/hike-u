// JournalContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { getJournal } from "../../utilities/journals-api";

const JournalContext = createContext();

export function useJournalContext() {
  return useContext(JournalContext);
}

export function JournalProvider({ children }) {
  const [journalList, setJournalList] = useState([]);

  // Fetch initial journal list when the component mounts
  useEffect(() => {
    const fetchInitialJournalList = async () => {
      try {
        const journals = await getJournal();
        setJournalList(journals);
      } catch (error) {
        console.error("Error fetching initial journal list:", error);
      }
    };

    fetchInitialJournalList();
  }, []);

  const addJournalToList = (newJournal) => {
    setJournalList([...journalList, newJournal]);
  };

  const deleteJournal = async (journalId) => {
    try {
      await deleteJournal(journalId);
      // Filter out the deleted journal from the list
      const updatedJournalList = journalList.filter(
        (journal) => journal.id !== journalId
      );
      setJournalList(updatedJournalList);
    } catch (error) {
      console.error("Error deleting journal:", error);
    }
  };

  return (
    <JournalContext.Provider value={{ journalList, addJournalToList }}>
      {children}
    </JournalContext.Provider>
  );
}

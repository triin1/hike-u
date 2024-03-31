import { useState, useEffect } from "react";
import { deleteJournal } from "../../utilities/journals-api";
import JournalList from "../../components/JournalList/JournalList";
import { getJournal } from "../../utilities/journals-api";
import { useLocation } from "react-router-dom";
import JournalSideBar from "../../components/JournalSideBar/JournalSideBar";

export default function JournalPage() {
  const [journalList, setJournalList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const location = useLocation();

  // Archive category setting
  const monthYear = journalList.map((j) => {
    const date = new Date(j.date);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    return { month, year };
  });
  const uniqueMonthYear = monthYear.filter((item, index, array) => {
    // Find the index of the first occurrence of the current item
    const firstIndex = array.findIndex(
      (obj) => obj.month === item.month && obj.year === item.year
    );
    // Return whether the current index is equal to the first index
    return index === firstIndex;
  });
  function handleDateSelect(index) {
    const selectedMonthYear = uniqueMonthYear[index];
    if (
      selectedDate &&
      selectedDate.month === selectedMonthYear.month &&
      selectedDate.year === selectedMonthYear.year
    ) {
      // Clear the selected date to revert back to original list
      setSelectedDate(null);
    } else {
      setSelectedDate(selectedMonthYear);
    }
  }

  const filteredJournalList = selectedDate
    ? journalList.filter((journal) => {
        const journalDate = new Date(journal.date);
        const journalMonth = journalDate.toLocaleString("default", {
          month: "long",
        });
        const journalYear = journalDate.getFullYear();

        return (
          journalMonth === selectedDate.month &&
          journalYear === selectedDate.year
        );
      })
    : journalList;

  async function handleDelete(journalId) {
    try {
      await deleteJournal(journalId);
      //filter out deleted note id
      const updatedJournals = journalList.filter((j) => j._id !== journalId);
      setJournalList(updatedJournals);
    } catch (err) {
      console.log(err);
    }
  }

  //fetch all journals when page loaded
  useEffect(() => {
    (async () => {
      try {
        const journals = await getJournal();
        setJournalList(journals);
      } catch (err) {
        console.log("loadding journal errors", err);
      }
    })();
  }, []);

  //fetch searched journals when input searchTerm
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    try {
      async function fetchSearchedResult() {
        const journals = await getJournal(searchTermFromUrl);
        setJournalList(journals);
      }
      fetchSearchedResult();
      console.log("get search results");
    } catch (err) {
      console.log("find searched journal", err);
    }
  }, [location.search]);

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <div className="row d-flex">
            {/* middel part */}
            <div className="col-xl-8 py-5 px-md-5">
              <JournalList
                filteredJournalList={filteredJournalList}
                handleDelete={handleDelete}
              />
            </div>

            {/* right side */}
            <div className="col-xl-3 ftco-animate bg-light pt-5 fadeInUp ftco-animated journalSideBar">
              <JournalSideBar
                uniqueMonthYear={uniqueMonthYear}
                selectedDate={selectedDate}
                handleDateSelect={handleDateSelect}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

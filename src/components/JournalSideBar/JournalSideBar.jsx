import Achive from "../Achive/Achive";
import JournalSearch from "../JournalSearch/JournalSearch";
import Newsletter from "../Newsletter/Newsletter";

export default function JournalSideBar({
  uniqueMonthYear,
  selectedDate,
  handleDateSelect,
}) {
  return (
    <>
      {/* search bar */}
      <div className="row row-3 search-bar">
        <JournalSearch />
      </div>

      {/* Achives */}
      <div className="sidebar-box ftco-animate fadeInUp ftco-animated row-cols-md-1">
        <Achive
          uniqueMonthYear={uniqueMonthYear}
          selectedDate={selectedDate}
          handleDateSelect={handleDateSelect}
        />
      </div>

      {/* Newsletter */}
      <div className="sidebar-box ftco-animate fadeInUp ftco-animated row-cols-md-1">
        <Newsletter />
      </div>
    </>
  );
}

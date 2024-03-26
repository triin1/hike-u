export default function Achive({
  uniqueMonthYear,
  selectedDate,
  handleDateSelect,
}) {
  return (
    <>
      <h3 className="sidebar-heading">Archives</h3>
      <ul className="list-group archives">
        {uniqueMonthYear.map((monthYear, index) => (
          <li
            key={index}
            onClick={() => handleDateSelect(index)}
            className={
              selectedDate &&
              selectedDate.month === monthYear.month &&
              selectedDate.year === monthYear.year
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {monthYear.month} {monthYear.year} <span></span>
          </li>
        ))}
      </ul>
    </>
  );
}

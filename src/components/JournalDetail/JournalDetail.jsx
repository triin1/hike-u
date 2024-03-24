import "./JournalDetail.css";

export default function JournalDetail({ journalDetail }) {
  return (
    <div className="row g-10">
      <div className="col-12 col-md-12">
        <img
          className="hiking-image"
          src={journalDetail.image}
          alt="hikingImg"
        />
        <h1 className="showpageHeading display-5 fw-bold text-center">
          {journalDetail.title}
        </h1>

        <ul className="lead text-center no-dot">
          {/* initial value journalDetail is empty and the user property is undefefind, using Optional Channing to out undefined instead of throwing error*/}
          <li>Creator: {journalDetail.user?.name}</li>
          <li>Difficulty:{journalDetail.difficulty}</li>
          <li>Date: {journalDetail.date}</li>
        </ul>
      </div>
    </div>
  );
}

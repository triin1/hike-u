import backgroundImage from "../../images/newsletter.jpg";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <>
      <div
        className="p-4 newsletter"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div>
        <h3 className="mb-4 sidebar-heading">Newsletter</h3>
        <p className="mb-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia
        </p>
        <form action="#" className="subscribe-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control newsletter-input"
              placeholder="Email Address"
            />
          </div>
        </form>
      </div>
    </>
  );
}

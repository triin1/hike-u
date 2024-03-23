/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="bg-white sidebar p-2">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32"></svg>
        <span className="fs-4">Hike-U</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">
            <Link to="/">Home</Link>
          </a>
        </li>
        <li>
          <a className="nav-link link-dark">
            <Link to="/equipment">Equipment</Link>
          </a>
        </li>
        <li>
          <a className="nav-link link-dark">
            <Link to="/journal">Journal</Link>
          </a>
        </li>
        <li>
          <a className="nav-link link-dark">
            <Link to="/adventures">Start Adventure</Link>
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>{user.name}</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <Link to="" onClick={handleLogOut} className="dropdown-item">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

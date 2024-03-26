/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
import React, { useState } from "react";

const NavBar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32"></svg>
        <span className="fs-2 fw-bold">Hike-U</span>
      </a>
      <hr />
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        &#9776;
      </button>
      <nav className={`nav flex-column`}>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/journal">
          Journal
        </Link>
        <Link className="nav-link" to="/equipment">
          Equipment
        </Link>

        <Link className="nav-link" to="/adventures">
          Start Adventure
        </Link>

        <div className="sidebar-bottom nav-link">
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
      </nav>
    </aside>
  );
};

export default NavBar;

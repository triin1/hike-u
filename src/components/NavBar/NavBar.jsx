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
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <Link to="/">Hike-U</Link>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <Link to="/">Home</Link>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i>
          <Link to="/journal">Journal</Link>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i>
          <Link to="/equipment">Equipment</Link>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <Link to="/adventures">Start Adventure</Link>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </a>
      </div>
    </div>
  );
}

export default NavBar;

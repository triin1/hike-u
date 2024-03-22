import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/journal">Journal</Link>
      &nbsp; | &nbsp;
      <Link to="/equipment">Equipment</Link>
      &nbsp; | &nbsp;
      <Link to="/adventures">Start Adventures</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      &nbsp;
      <span>Welcome, {user.name}</span>
    </nav>
  );
}

export default NavBar;

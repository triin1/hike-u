/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div id="colorlib-page">
      <a href="/" class="js-colorlib-nav-toggle colorlib-nav-toggle">
        <i></i>
      </a>
      <aside
        id="colorlib-aside"
        role="complementary"
        className="js-fullheight img"
        style={{ backgroundImage: "url(images/sidebar-bg.jpg)" }}
      >
        <h1 id="colorlib-logo" className="mb-4">
          <a href="/">Hike-U</a>
        </h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li class="colorlib-active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/equipment">Equipment</Link>
            </li>
            <li>
              <Link to="/adventures">Start Adventure</Link>
            </li>
            <li>
              <Link to="" onClick={handleLogOut}>
                Log Out
              </Link>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <div className="mb-4">
            <h3>Subscribe for Hike-U</h3>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default NavBar;

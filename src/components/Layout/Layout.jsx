// Layout.js

import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Layout.css";

function Layout({ user, setUser, children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 p-0 d-md-block">
          <NavBar user={user} setUser={setUser} />
        </div>
        <main className="col-md-9 col-lg-10 main-content">{children}</main>
      </div>
    </div>
  );
}

export default Layout;

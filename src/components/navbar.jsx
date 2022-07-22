import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = React.useState(null);
  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
      <a href="/auto-photographer" className="navbar-brand">
        <img
          className="m-3"
          src={require("../images/camera.png")}
          width="30"
          height="30"
          alt=""
        />
        Auto Photographer
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={"/auto-photographer"} className="nav-link">
              Camera
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/gallery"} className="nav-link">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
      {user ? (
        <button onClick={logout} className="form-group btn btn-outline-danger mx-3" type="submit">
          Logout {user.name}
        </button>
      ) : (
        <form className="form-inline mx-4">
          <input
            className="form-group pt-1 pb-2 mx-3"
            type="text"
            placeholder="Username"
            aria-label="Login"
          />
          <button className="form-group btn btn-outline-success" type="submit">
            Login
          </button>
        </form>
      )}
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="left">Rest Api Handling</div>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">Infinite Scrolling</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/validation">Login + validation</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

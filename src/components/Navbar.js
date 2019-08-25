import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({isToggleOn}) {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="left">Rest Api Handling</div>
       
        <ul className="right">
        {isToggleOn === true ? (
          <React.Fragment>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <NavLink to="/about">Infinite Scrolling</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          </React.Fragment>
          )
          :
          (<li>
            <NavLink to="/">Login + validation</NavLink>
          </li>)}
        </ul>
        
        
      </div>
    </nav>
  );
}

export default Navbar;

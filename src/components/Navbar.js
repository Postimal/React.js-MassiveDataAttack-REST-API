import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({isToggleOn}) {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="left">Rest Api Handling</div>
       
        <ul className="right">
        {isToggleOn === true ? (
          <React.Fragment>
          <li>
            <NavLink activeClassName="active" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">Infinite Scrolling</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          </li>
          </React.Fragment>
          )
          :
          (<li>
            <NavLink activeClassName="active" to="/">Login + validation</NavLink>
          </li>)}
        </ul>
        
        
      </div>
    </nav>
  );
}

export default Navbar;

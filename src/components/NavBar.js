import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { GiFamilyHouse } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <GiFamilyHouse className="icon" /> Surreal Estate
        </li>
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/addproperty">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

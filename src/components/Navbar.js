import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar1">
        <Link to="/" className="navlink5">
          Home
        </Link>
        <Link to="/display" className="navlink5">
          Display
        </Link>
        <Link to="/search" className="navlink5">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

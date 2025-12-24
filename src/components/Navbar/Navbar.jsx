import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>MovieManiac</h1>
      </Link>
      <DarkMode />
      <div className="navbar_links">
        <Link to="/popular" className={location.pathname === "/" || location.pathname === "/popular" ? "active" : ""}>
          Popular
        </Link>
        <Link to="/top-rated" className={location.pathname === "/top-rated" ? "active" : ""}>
          Top Rated
        </Link>
        <Link to="/upcoming" className={location.pathname === "/upcoming" ? "active" : ""}>
          Upcoming
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

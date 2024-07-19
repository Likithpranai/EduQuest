import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>EduQuest</h1>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/online-courses">
            {" "}
            Online Courses
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/internship-tracker">
            Internship Tracker
          </Link>
        </li>
      </ul>
      <div className="nav-login">
        <button>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

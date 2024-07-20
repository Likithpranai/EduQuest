import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <NavLink to="/" className="my-link">
          EduQuest
        </NavLink>
      </h1>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className="my-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="my-link">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/online-courses" className="my-link">
            Online Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/internship-tracker" className="my-link">
            Internship Tracker
          </NavLink>
        </li>
      </ul>
      <div className="nav-login">
        <Link to="/login" className="my-link-login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

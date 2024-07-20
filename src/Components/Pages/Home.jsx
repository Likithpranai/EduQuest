import React from "react";
import "./Home.css";
import graduation_comp from "../Assets/graduation_comp.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home fade-in">
      <div className="home-text ">
        <h2>
          Explore in-demand skills and online courses in the software industry{" "}
        </h2>
        <p>
          Discover the latest skills and online courses to help you advance your
          career in the software industry
        </p>
        <div className="home-login">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
      <div className="home-img">
        <img src={graduation_comp} alt="" />
      </div>
    </div>
  );
};

export default Home;

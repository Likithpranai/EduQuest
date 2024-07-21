import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <div className="footer-icons-container">
          <a
            href="https://www.linkedin.com/in/likithpranai/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://github.com/Likithpranai"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://www.instagram.com/likith_pr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

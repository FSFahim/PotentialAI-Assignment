import React from "react";
import "../stylesheets/navbar.css";
import Button from "./Button";
import Logo from "../assets/logo.png";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? "darkHeader" : ""}`}>
      <a href="/" className="logo">
        <img src={Logo} alt="" />
        <span className={`firstLetter ${darkMode ? "darkFirstLetter" : ""}`}>
          M
        </span>
        <span className={`logoText ${darkMode ? "darkLogoText" : ""}`}>
          umair
        </span>
      </a>
      <nav className={`navbar ${darkMode ? "darkNavbar" : ""}`}>
        <a href="/">Home</a>
        <a href="/">About Me</a>
        <a href="/">Services</a>
        <a href="/">Projects</a>
        <a href="/">Testimonials</a>
        <a href="/">Contact</a>
        <Button buttonText="Download CV" className="navItem" />
        <i
          className={`navItem fa-regular ${
            darkMode ? "fa-sun darkNavItem" : "fa-moon"
          }`}
          onClick={toggleDarkMode}
        ></i>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/logo.png";
import "../stylesheets/logo.css";

const Logo = ({ darkMode }) => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <span className={`firstLetter ${darkMode ? "darkFirstLetter" : ""}`}>
        M
      </span>
      <span className={`logoText ${darkMode ? "darkLogoText" : ""}`}>
        umair
      </span>
    </div>
  );
};

export default Logo;

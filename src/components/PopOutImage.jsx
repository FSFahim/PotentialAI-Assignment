import React from "react";
import hero from "../assets/hero.jpg";
import "../stylesheets/popOutImage.css";

const PopOutImage = ({ darkMode }) => {
  return (
    <div className={`box ${darkMode ? "darkBox" : ""}`}>
      <div className="circle">
        <img src={hero} alt="" />
      </div>
      <img src={hero} alt="" />
    </div>
  );
};

export default PopOutImage;

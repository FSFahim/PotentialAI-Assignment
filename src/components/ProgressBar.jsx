import React from "react";
import "../stylesheets/progressBar.css";

const ProgressBar = ({ label, progress }) => {
  return (
    <div className="progressBarContainer">
      <div className="label">{label}</div>
      <div className="progressBar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <div className="progressCircle" style={{ left: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;

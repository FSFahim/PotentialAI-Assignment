import React from "react";
import "../stylesheets/aboutMe.css";
import ProgressBar from "./ProgressBar";
import PopOutImage from "./popOutImage";

const AboutMe = () => {
  const skills = [
    { label: "UX", progress: 70 },
    { label: "Website Design", progress: 85 },
    { label: "App Design", progress: 90 },
    { label: "Graphic Design", progress: 75 },
  ];
  return (
    <div className="aboutMe">
      <div className="aboutMeLeft">
        <PopOutImage />
      </div>
      <div className="aboutMeRight">
        <div className="title">About Me</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iste,
          iure inventore eius id blanditiis deleniti tempora esse, animi maxime
          labore consequatur, molestias quo soluta.
        </div>
        {skills.map((skill, index) => (
          <ProgressBar
            key={index}
            label={skill.label}
            progress={skill.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

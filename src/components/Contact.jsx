import React from "react";
import "../stylesheets/contact.css";
import TitleWithDesc from "./TitleWithDesc";
import Button from "./Button";

const Contact = ({ darkMode }) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestias quam! Molestiae dolore laudantium itaque numquam nostrum, sunt fuga aliquam.";
  return (
    <div className={`contact ${darkMode ? "darkContact" : ""}`}>
      <TitleWithDesc title="Lets Design Together" desc={description} />
      <div className="emailInputContainer">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="emailInput"
        />
        <Button buttonText="Contact Me" />
      </div>
    </div>
  );
};

export default Contact;

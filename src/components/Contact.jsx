import React from "react";
import "../stylesheets/contact.css";
import TitleWithDesc from "./TitleWithDesc";
import Button from "./Button";

const Contact = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestias quam! Molestiae dolore laudantium itaque numquam nostrum, sunt fuga aliquam.";
  return (
    <div className="contact">
      <TitleWithDesc title="Lets Design Together" desc={description} />
      <div className="email-input-container">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="email-input"
        />
        <Button buttonText="Contact Me" />
      </div>
    </div>
  );
};

export default Contact;

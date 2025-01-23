import React from "react";
import "../stylesheets/button.css";

const Button = ({ buttonText, className }) => {
  return <button className={`button ${className}`}>{buttonText}</button>;
};

export default Button;

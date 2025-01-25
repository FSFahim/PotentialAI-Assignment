import React from "react";
import "../stylesheets/socialMediaButtons.css";

const SocialMediaButtons = ({ darkMode }) => {
  return (
    <div
      className={`socialMediaButtons ${
        darkMode ? "darkSocialMediaButtons" : ""
      }`}
    >
      <a href="/">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="/">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a href="/">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="/">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialMediaButtons;

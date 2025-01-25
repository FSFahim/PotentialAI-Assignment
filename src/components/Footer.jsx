import React from "react";
import "../stylesheets/footer.css";
import Logo from "./Logo";
import SocialMediaButtons from "./SocialMediaButtons";

const Footer = ({ darkMode }) => {
  return (
    <div className="footer">
      <div className={`footerTop ${darkMode ? "darkFooterTop" : ""}`}>
        <div className="footerLogo">
          <Logo darkMode={darkMode} />
        </div>
        <div className="footerNav">
          <a href="#hero">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <SocialMediaButtons darkMode={darkMode} />
      </div>
      <div className={`footerBottom ${darkMode ? "darkFooterBottom" : ""}`}>
        <p>
          &copy; 2023{" "}
          <span style={{ color: "#fd6f00", fontWeight: 600 }}>Mumair</span> All
          Rights Reserved , Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;

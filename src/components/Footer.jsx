import React from "react";
import "../stylesheets/footer.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerLogo">
          <img src={Logo} alt="" />
          <span style={{ color: "#000", fontWeight: 700 }}>M</span>
          umair
        </div>
        <div className="footerNav">
          <a href="#hero">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footerSocialButtons">
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
      </div>
      <div className="footerBottom">
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

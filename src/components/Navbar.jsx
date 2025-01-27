import React, { useState, useEffect } from "react";
import "../stylesheets/navbar.css";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header
      className={`header ${darkMode ? "darkHeader" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <a href="/">
        <Logo darkMode={darkMode} />
      </a>
      <div
        className={`menuIcon ${darkMode ? "darkMenuIcon" : ""}`}
        onClick={toggleMenu}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav
        className={`navbar ${menuOpen ? "open" : ""} ${
          darkMode ? "darkNavbar" : ""
        }`}
      >
        <a href="#hero" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about-me" onClick={toggleMenu}>
          About Me
        </a>
        <a href="#services" onClick={toggleMenu}>
          Services
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#testimonials" onClick={toggleMenu}>
          Testimonials
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
        <Button buttonText="Download CV" className="navItem" />
        <i
          className={`navItem fa-regular ${
            darkMode ? "fa-sun darkNavItem" : "fa-moon"
          }`}
          onClick={toggleDarkMode}
        ></i>
      </nav>
    </header>
  );
};

export default Navbar;

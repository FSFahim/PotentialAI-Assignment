import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "darkMode" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div id="hero">
        <HeroSection darkMode={darkMode} />
      </div>
      <div id="about-me">
        <AboutMe darkMode={darkMode} />
      </div>
      <div id="services">
        <Services darkMode={darkMode} />
      </div>
      <div id="projects">
        <Projects darkMode={darkMode} />
      </div>
      <div id="testimonials">
        <Testimonials darkMode={darkMode} />
      </div>
      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

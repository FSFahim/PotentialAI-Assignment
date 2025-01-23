import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";

const App = () => {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <AboutMe />
    </div>
  );
};

export default App;

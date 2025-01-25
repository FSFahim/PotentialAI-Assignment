import React from "react";
import "../stylesheets/serviceCard.css";

const ServiceCard = ({ icon, title, description, darkMode }) => {
  return (
    <div className={`serviceCard ${darkMode ? "darkServiceCard" : ""}`}>
      <img src={icon} alt="Icon" className="serviceCardLogo" />
      <h3 className="serviceCardTitle">{title}</h3>
      <p className="serviceCardDescription">{description}</p>
    </div>
  );
};

export default ServiceCard;

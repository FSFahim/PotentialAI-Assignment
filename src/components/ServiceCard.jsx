import React from "react";
import "../stylesheets/serviceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt="Icon" className="serviceCardLogo" />
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDescription">{description}</p>
    </div>
  );
};

export default ServiceCard;

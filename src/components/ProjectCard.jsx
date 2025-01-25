import React from "react";
import "../stylesheets/projectCard.css";

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`projectCard ${darkMode ? "darkProjectCard" : ""}`}>
      <img src={project.image} alt={project.title} className="projectImage" />
      <h4 className="projectCategory">{project.category}</h4>
      <h3 className="projectTitle">{project.title}</h3>
    </div>
  );
};

export default ProjectCard;

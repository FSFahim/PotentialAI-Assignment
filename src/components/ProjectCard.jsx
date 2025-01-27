import React from "react";
import "../stylesheets/projectCard.css";

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`projectCard ${darkMode ? "darkProjectCard" : ""}`}>
      <img src={project.image} alt={project.title} className="projectImage" />
      <div className="projectCategory">{project.category}</div>
      <div className="projectTitle">{project.title}</div>
    </div>
  );
};

export default ProjectCard;

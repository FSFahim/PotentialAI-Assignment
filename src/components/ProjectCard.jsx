import React from "react";
import "../stylesheets/projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h4 className="project-category">{project.category}</h4>
      <h3 className="project-title">{project.title}</h3>
    </div>
  );
};

export default ProjectCard;

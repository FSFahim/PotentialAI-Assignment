import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import TitleWithDesc from "./TitleWithDesc";
import "../stylesheets/projects.css";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.jpg";
import Project4 from "../assets/Project4.jpg";
import Project5 from "../assets/Project5.webp";

const projects = [
  {
    id: 1,
    title: "AirCalling Landing Page Design",
    category: "Web Design",
    image: Project1,
  },
  {
    id: 2,
    title: "Business Landing Page Design",
    category: "Web Design",
    image: Project2,
  },
  {
    id: 3,
    title: "Ecom Web Page Design",
    category: "App Design",
    image: Project3,
  },
  {
    id: 4,
    title: "Mobile App Dashboard",
    category: "UI/UX",
    image: Project4,
  },
  {
    id: 5,
    title: "Logo Design",
    category: "Graphic Design",
    image: Project5,
  },
];

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque autem eligendi rem magnam eius quisquam soluta corporis eaque ea"

  return (
    <div className="project-gallery">
      <TitleWithDesc title="Projects" desc={description} />
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

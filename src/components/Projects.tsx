import React from "react";
import { projects } from "../data";

const Projects: React.FC = () => (
  <ul className="projects-list">
    {projects.map((proj) => (
      <li key={proj.name} className="project-item">
        <a href={proj.url} target="_blank" rel="noopener noreferrer">
          <strong>{proj.name}</strong>
        </a>
        <span className="project-desc">{proj.description}</span>
      </li>
    ))}
  </ul>
);

export default Projects;

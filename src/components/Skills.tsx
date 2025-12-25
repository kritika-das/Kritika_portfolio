import React from "react";
import { skills } from "../data";

const Skills: React.FC = () => (
  <div className="skills-list">
    {skills.map((skill) => (
      <div key={skill.category} className="skill-category">
        <strong>{skill.category}:</strong>
        <span> {skill.items.join(", ")}</span>
      </div>
    ))}
  </div>
);

export default Skills;

import React from "react";
import { experience } from "../data";

const Experience: React.FC = () => (
  <div className="experience-list">
    {experience.map((exp) => (
      <div key={exp.company} className="experience-item">
        <div className="exp-header">
          <span className="exp-company">{exp.company}</span>
          <span className="exp-location">{exp.location}</span>
        </div>
        <div className="exp-title">
          <span>{exp.title}</span>
          <span>{exp.period}</span>
        </div>
        <ul className="exp-items">
          {exp.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Experience;

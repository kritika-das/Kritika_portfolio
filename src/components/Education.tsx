import React from "react";
import { education } from "../data";

const Education: React.FC = () => (
  <ul className="education-list">
    {education.map((edu) => (
      <li key={edu.school} className="education-item">
        <div className="edu-header">
          <span className="edu-school">{edu.school}</span>
          <span className="edu-score">{edu.score}</span>
        </div>
        <div className="edu-details">
          <span>{edu.degree}</span>
          <span>{edu.year}</span>
        </div>
      </li>
    ))}
  </ul>
);

export default Education;

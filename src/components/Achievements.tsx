import React from "react";
import { achievements } from "../data";

const Achievements: React.FC = () => (
  <ul className="achievements-list">
    {achievements.map((ach, idx) => (
      <li key={idx}>{ach}</li>
    ))}
  </ul>
);

export default Achievements;

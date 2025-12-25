import React from "react";
import { profileLinks } from "../data";

const ProfileLinks: React.FC = () => (
  <ul className="profile-links-list">
    {profileLinks.map((link) => (
      <li key={link.label}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          <strong>{link.label}:</strong> {link.description}
        </a>
      </li>
    ))}
  </ul>
);

export default ProfileLinks;

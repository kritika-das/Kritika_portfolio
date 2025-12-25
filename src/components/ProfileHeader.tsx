import React from "react";
import { profile } from "../data";


import photo from '../assets/kritikadasphoto.jpg';

const ProfileHeader: React.FC = () => (
  <header className="profile-header">
    <h1 className="profile-name">Kritika Das</h1>
    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="profile-photo-link">
      <img
        src={photo}
        alt="Kritika Das"
        className="profile-photo"
        title="View LinkedIn profile"
      />
    </a>
    <nav className="main-nav">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#hireme">Hire Me</a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://leetcode.com/u/kritikad322" target="_blank" rel="noopener noreferrer">LeetCode</a>
      <a href="https://www.geeksforgeeks.org/user/kritika_das/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
      <a href="https://www.codechef.com/users/kritikad322" target="_blank" rel="noopener noreferrer">CodeChef</a>
    </nav>
    <div className="profile-contact">
      <a href={`mailto:${profile.email}`}>{profile.email}</a> | {profile.phone}
    </div>
  </header>
);

export default ProfileHeader;

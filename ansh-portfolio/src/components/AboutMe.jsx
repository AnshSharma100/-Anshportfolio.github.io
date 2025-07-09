import React from 'react';
import { Helmet } from 'react-helmet-async';
import profilePic from '../assets/potfoliopfp.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <Helmet>
        <title>About Me - Ansh Sharma</title>
        <meta name="description" content="Learn more about Ansh Sharma, a software engineering student at UT Dallas passionate about AI and software development." />
      </Helmet>
      <div className="profile-section">
        <img src={profilePic} alt="Ansh Sharma" className="profile-image" />
        <div className="intro-text">
          <h2>Hi, I'm Ansh Sharma</h2>
          <p>
            I'm a Software Engineering student at the University of Texas at Dallas with a deep interest in AI, systems programming, and applied machine learning. I enjoy building high-impact tools, from intelligent assistants to low-level performance-driven software. I'm currently focused on research and development that bridges software engineering with machine learning, and I’m always eager to take on technically challenging and meaningful work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

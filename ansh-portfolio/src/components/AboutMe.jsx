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
            I'm a Software Engineering student at the University of Texas at Dallas, passionate about AI and software development. 
            I've worked on AI-powered projects such as OPTIC-net, and I'm eager to connect and explore new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

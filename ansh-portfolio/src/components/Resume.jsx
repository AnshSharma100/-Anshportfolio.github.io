import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <p>Download my resume below:</p>
      <a href="C:\Users\sharm\Downloads\AnshSharma-Resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <p>View my resume below:</p>
      <a href="/AnshSharma-Resume.pdf" target="_blank" rel="noopener noreferrer">
        Open Resume
      </a>
    </div>
  );
};

export default Resume;

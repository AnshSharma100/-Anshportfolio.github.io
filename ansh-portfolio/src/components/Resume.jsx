import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <Helmet>
        <title>Resume - Ansh Sharma</title>
        <meta name="description" content="View the resume of Ansh Sharma, a software engineering student at UT Dallas." />
      </Helmet>
      <h2>My Resume</h2>
      <p>View my resume below:</p>
      <a href={process.env.PUBLIC_URL + "/AnshSharma-Resume.pdf"} target="_blank" rel="noopener noreferrer">
        Open Resume
      </a>
    </div>
  );
};

export default Resume;

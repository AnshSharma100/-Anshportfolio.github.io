import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Resume.css';

const Resume = () => {
  const resumePath = `${process.env.PUBLIC_URL}/AnshSharma-Resume.pdf`;

  return (
    <div className="resume">
      <Helmet>
        <title>Resume - Ansh Sharma</title>
        <meta name="description" content="View the resume of Ansh Sharma, a software engineering student at UT Dallas." />
      </Helmet>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', margin: '32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="https://www.linkedin.com/in/ansh-sharma-softwareengineer" target="_blank" rel="noopener noreferrer" className="linkedin-btn">LinkedIn</a>
          <span className="linkedin-label">Press to open LinkedIn</span>
        </div>
        <div style={{ width: '2px', height: '40px', background: '#ccc', margin: '0 24px' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href={resumePath} target="_blank" rel="noopener noreferrer" className="resume-btn">Open Resume</a>
          <span className="linkedin-label">Press to open Resume</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;

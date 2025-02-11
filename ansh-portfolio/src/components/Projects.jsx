import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'OPTIC-net',
    description: 'AI-powered platform for diabetic retinopathy detection.',
    videoUrl: '/OpticNet video.mp4', // Public folder reference
    githubUrl: 'https://github.com/AnshSharma100/OpticNet',
  },
  {
    title: 'CarIQ',
    description: 'An iOS app that integrates AI to analyze vehicle data.',
    videoUrl: '/CarIQ Video.mov', // Public folder reference
    githubUrl: 'https://github.com/diyabhtt/CarIQ',
  },
  {
    title: 'LifeBoat AI',
    description: 'AI system designed for rescue missions and emergency response.',
    videoUrl: '', // No video provided yet
    githubUrl: 'https://github.com/YOUR_GITHUB/LifeBoatAI',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      {!selectedProject ? (
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <button key={index} className="project-card" onClick={() => setSelectedProject(project)}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="project-details">
          <button className="back-button" onClick={() => setSelectedProject(null)}>← Back</button>
          <h2>{selectedProject.title}</h2>
          {selectedProject.videoUrl ? (
            <video className="project-video" controls>
              <source src={selectedProject.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video available.</p>
          )}
          <p>{selectedProject.description}</p>
          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;

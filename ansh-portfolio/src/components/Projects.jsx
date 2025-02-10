import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'OPTIC-net',
    description: 'AI-powered platform for diabetic retinopathy detection.',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // Replace with actual video link
    githubUrl: 'https://github.com/YOUR_GITHUB/OPTIC-net',
  },
  {
    title: 'CarIQ',
    description: 'An iOS app that integrates AI to analyze vehicle data.',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    githubUrl: 'https://github.com/diyabhtt/CarIQ',
  },
  {
    title: 'LifeBoat AI',
    description: 'AI system designed for rescue missions and emergency response.',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
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
          <iframe 
            className="project-video" 
            src={selectedProject.videoUrl} 
            title={selectedProject.title} 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
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

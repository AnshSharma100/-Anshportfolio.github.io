import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'OPTIC-net',
    description: 'AI-powered platform for diabetic retinopathy detection.',
  },
  {
    title: 'CarIQ',
    description: 'An iOS app that integrates AI to analyze vehicle data.',
  },
  {
    title: 'LifeBoat AI',
    description: 'AI system designed for rescue missions and emergency response.',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

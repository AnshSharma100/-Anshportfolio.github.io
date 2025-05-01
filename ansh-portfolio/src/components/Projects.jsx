import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'OPTIC-net',
    description: 'OPTIC-net is an AI-powered web platform for early diabetic retinopathy detection. It uses a TensorFlow deep learning model trained on over 10GB of medical imaging data, achieving a 10-20% improvement in diagnostic accuracy. The platform integrates a Flask backend with a responsive HTML frontend, providing real-time image preprocessing and AI inference for a seamless user experience.',
    videoUrl: `${process.env.PUBLIC_URL}/videos/OpticNetvideo.mp4`,
    githubUrl: 'https://github.com/AnshSharma100/OpticNet',
  },
  {
    title: 'CarIQ',
    description: 'CarIQ is an iOS app that leverages AI to analyze vehicle data and provide actionable insights. It integrates the SambaNova API for backend processing and uses Flask to build REST APIs for handling car data queries. The app delivers AI-powered analytics and recommendations directly to users through a Swift-based interface.',
    videoUrl: `${process.env.PUBLIC_URL}/videos/CarIQVideo.mp4`,
    githubUrl: 'https://github.com/diyabhtt/CarIQ',
  },
  {
    title: 'Curio',
    description: 'Curio is a medical web app that enables users to communicate with AI for symptom analysis. The app features a unique call functionality, allowing users to talk to a chatbot about their symptoms in real-time. It integrates advanced AI models for accurate symptom detection and provides a user-friendly interface for seamless interaction.',
    videoUrl: `${process.env.PUBLIC_URL}/videos/CurioVideo.mp4`,
    githubUrl: 'https://github.com/diyabhtt/testCure',
  },
  {
    title: 'BreakPoint',
    description: 'BreakPoint is an iOS WhatsApp-style text-based game designed to help users navigate toxic relationships. It features AI-driven character interactions powered by the OpenRouter API, enabling dynamic conversation outcomes. The app includes emotional tracking, journaling, and achievement-based progress tracking, all built with Swift, Supabase, and TypeScript.',
    videoUrl: `${process.env.PUBLIC_URL}/videos/BreakPoint.mp4`,
    githubUrl: 'https://github.com/diyabhtt/BreakPointFinal', 
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
              <p>{project.description.split('.')[0]}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="project-details">
          <button className="back-button" onClick={() => setSelectedProject(null)}>
            ← Back
          </button>
          <h2>{selectedProject.title}</h2>
          <div className="project-content">
            {selectedProject.videoUrl ? (
              <video className="project-video" controls>
                <source src={selectedProject.videoUrl} type="video/mp4" />
                Your browser does not support this video format.
              </video>
            ) : (
              <p>No video available.</p>
            )}
            <p className="project-description">{selectedProject.description}</p>
          </div>
          {selectedProject.githubUrl && (
            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;

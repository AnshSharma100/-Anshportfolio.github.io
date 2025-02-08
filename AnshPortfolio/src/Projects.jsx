import React from 'react';
import './styles/main.css';

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="card">
          <h3>OPTIC-net</h3>
          <p>An award-winning AI-powered platform for diabetic retinopathy detection.</p>
        </div>
        <div className="card">
          <h3>CarIQ</h3>
          <p>An iOS app that integrates AI to analyze vehicle data for better diagnostics and performance insights.</p>
        </div>
        <div className="card">
          <h3>LifeBoat AI</h3>
          <p>Developed a machine learning model to predict Titanic passenger survival using logistic regression and decision trees. It analyzes the chance of survival based on the passengers' details like age, class, and sex.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

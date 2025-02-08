import React from 'react';
import './styles/main.css';

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <img
          className="profile-img"
          src={require('./assets/portfolio_picture.jpg')}
          alt="Ansh Sharma"
        />
        <p>
          Hi, I’m Ansh Sharma, a Freshman Software Engineering student at UT Dallas with a passion for AI and software development. I’ve led projects like OPTIC-net, an award-winning AI-powered platform for diabetic retinopathy detection, and developed CarIQ, an iOS app integrating AI to analyze vehicle data. My ability to bridge AI with full-stack development sets me apart, as I specialize in machine learning, Python, and React. I’m looking to connect with professionals in AI and software engineering to explore opportunities where I can apply my skills.
        </p>
        <a href={require('./assets/AnshSharma-Resume.pdf')} target="_blank" rel="noopener noreferrer">
          Download My Resume
        </a>
      </div>
    </section>
  );
}

export default About;

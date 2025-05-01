import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="app dark">
      <Header />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Resume />
    </div>
  );
};

export default App;

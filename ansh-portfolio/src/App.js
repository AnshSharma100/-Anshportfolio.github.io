import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
};

export default App;

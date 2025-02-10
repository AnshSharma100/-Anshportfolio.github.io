import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header />
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <AboutMe />
      <Projects />
      <ContactForm />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;

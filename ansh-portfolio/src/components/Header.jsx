import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Helmet>
        <title>Welcome to Ansh Sharma's Portfolio</title>
        <meta name="description" content="Explore the portfolio of Ansh Sharma, a software engineer specializing in AI and web development." />
      </Helmet>
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
};

export default Header;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Helmet>
        <meta name="description" content="© 2025 Ansh Sharma | Software Engineer | Portfolio" />
      </Helmet>
      <p>&copy; 2025 Ansh Sharma | All Rights Reserved</p>
    </div>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
  };

  return (
    <div className="contact-form">
      <Helmet>
        <title>Contact - Ansh Sharma</title>
        <meta name="description" content="Get in touch with Ansh Sharma for collaboration or inquiries." />
      </Helmet>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name} 
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <a href="https://www.linkedin.com/in/ansh-sharma-softwareengineer" target="_blank" rel="noopener noreferrer">
        <button>LinkedIn</button>
      </a>
    </div>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
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

    const serviceID = 'service_uxeyrc7';
    const templateID = 'template_ur87yjg';
    const userID = 'tUwXTNM6V_h0PuADk';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: 'New Message From Portfolio',
      time: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert('Failed to send the message, please try again.');
        console.error('EmailJS error:', error);
      });
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
    </div>
  );
};

export default ContactForm;

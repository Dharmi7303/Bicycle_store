import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css'; // Import your CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sendingStatus, setSendingStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSendingStatus('');
  
    if (!formData.name.trim()) {
      setErrorMessage('Name field cannot be empty.');
      return;
    } else if (!formData.email.trim()) {
      setErrorMessage('Email field cannot be empty.');
      return;
    } else if (!formData.message.trim()) {
      setErrorMessage('Message field cannot be empty.');
      return;
    }
  
    setErrorMessage('');
    setSendingStatus('Sending...');
  
    // After validation, Netlify handles the form submission automatically
    // You can add logic here to reset the form or handle the submission status
  };
  
  
  return (
    <Container className="contact-container my-4">
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit} data-netlify="true">
        <Form.Group className="mb-3">
          <Form.Label>Your Name *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Message *</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="primary-button">Submit</Button>
      </Form>

      {sendingStatus && <Alert variant="info">{sendingStatus}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </Container>
  );
}

export default Contact;
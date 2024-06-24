import React, { useState } from 'react';
import { Container, Accordion, Card, Form } from 'react-bootstrap';
import './FAQ.css';

const faqData = [
  { question: "How long does shipping take?", answer: "Shipping typically takes 3-5 business days." },
  { question: "Can I return a product?", answer: "Products can be returned within 30 days of purchase." },
  { question: "Do you offer international shipping?", answer: "Yes, we offer shipping to select international destinations." },
  { question: "How can I track my order?", answer: "You can track your order using the tracking number provided in your shipping confirmation email." },
  { question: "What payment methods do you accept?", answer: "We accept various payment methods including credit cards, PayPal, and Apple Pay." },
  { question: "Is my personal information secure?", answer: "Yes, we use industry-standard encryption to protect your personal information." },
  { question: "How do I make changes to my order?", answer: "Please contact our customer service team as soon as possible to make changes to your order." },
  { question: "Do you offer gift wrapping services?", answer: "Yes, we offer gift wrapping services for a small additional fee." },
  { question: "What is your refund policy?", answer: "Refunds are processed within 7-10 business days after receiving the returned item." },
  { question: "Do you have a physical store location?", answer: "Currently, we operate exclusively online and do not have a physical store." },
  { question: "Are there any discounts for bulk orders?", answer: "Yes, we offer discounts for bulk orders. Please contact us for more information." },
  { question: "What should I do if I receive a damaged product?", answer: "If you receive a damaged product, please contact us immediately for a replacement or refund." },
  { question: "Can I change my shipping address after placing an order?", answer: "Please contact us as soon as possible to change your shipping address. Changes may not be possible once the order has shipped." },
  { question: "Do you have a loyalty program?", answer: "Yes, we have a loyalty program where customers can earn points and receive exclusive offers." },
  { question: "What are your customer service hours?", answer: "Our customer service team is available Monday to Friday, 9 am to 5 pm EST." },
];


function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="faq-container my-4">
      <Form.Control
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-3"
      />
      <Accordion defaultActiveKey="0">
        {filteredFaqs.map((faq, index) => (
          <Card key={index}>
            <Accordion.Item eventKey={String(index)}>
              <Accordion.Header>
                {faq.question}
              </Accordion.Header>
              <Accordion.Body>
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
}

export default FAQ;

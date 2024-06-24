import React from 'react';
import './Hero.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Hero = ({ scrollToProductList }) => {
  return (
    <div className="hero-container">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6} className="hero-text-column">
            <div className="hero-content">
              <h1 className="hero-title">Discover Your Perfect Ride at Fietsen!</h1>
              <h2 className="hero-subtitle">A Hub for Bike Enthusiasts to Buy, Sell, and Explore</h2>
              <Button className="primary-button" onClick={scrollToProductList}>
                Start Your Cycling Adventure
              </Button>
            </div>
          </Col>
          <Col md={6} className="hero-image-column">
            <img src={`${process.env.PUBLIC_URL}/images/hero/promo-image.png`} alt="Promotional Product" className="promo-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;

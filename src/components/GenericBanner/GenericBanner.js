// GenericBanner.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './GenericBanner.css'; // Import your CSS file for styling

function GenericBanner() {
  return (
    <Container fluid className="banner-container">
      <Row>
        <Col md={6} className="banner-content left-banner">
          <div className="banner-text">
            <h2>Start Selling Your Bike Now</h2>
            <p>Get ready to list your bike and find buyers!</p>
            <Link to="/SellBikeForm"> {/* Use PascalCase for component name */}
              <Button className="primary-button" id="banner-button">Get Started</Button>
            </Link>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/banner/banner-image.png`} alt="Left Banner" className="image-banner" />
        </Col>
        <Col md={6} className="banner-content right-banner">
          <div className="banner-text">
            <h2>Download Our App</h2>
            <p>Get our app for the best shopping experience!</p>
            <div className="app-buttons">
              <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/images/stores/google-play.png`} alt="Google Play" className="app-button-image" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/images/stores/apple-store.png`} alt="Apple Store" className="app-button-image" />
              </a>
            </div>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/app/app.png`} alt="Right Banner" className="image-banner"/>
        </Col>
      </Row>
    </Container>
  );
}

export default GenericBanner;

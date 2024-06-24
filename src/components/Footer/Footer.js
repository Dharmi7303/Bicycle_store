import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer-container text-light">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="footer-logo">
              <img src={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`} alt="Logo" className="img-fluid" />
              <p>Ride the INDIAN Way: Quality Second-Hand Bikes for Everyone</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="footer-navigation">
            <ul>
                <li><a href="https://igordinuzzi.github.io/ecommerce-site-react/#/">Home</a></li>
                <li><a href="https://igordinuzzi.github.io/ecommerce-site-react/#/products">Products</a></li>
                <li><a href="https://igordinuzzi.github.io/ecommerce-site-react/#/SellBikeForm">Sell Your Bike</a></li>
                {/* <li><a href="https://igordinuzzi.github.io/ecommerce-site-react/#/about">About</a></li> */}
                <li><a href="https://igordinuzzi.github.io/ecommerce-site-react/#/faqs">FAQs</a></li>
                <li><a href="https://igordinuzzi.github.io/ecommerce-site-react/#/contact">Contact</a></li>
            </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
          <div className="social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="mailto:replytoigor@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
          <div className="app-store-links">
              <h3>Download Our App</h3>
              <div className="app-icons">
                {/* Replace 'google-play-link' and 'apple-store-link' with actual app store links */}
                <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/stores/google-play.png`} alt="Google Play" className="img-fluid" />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/stores/apple-store.png`} alt="Apple Store" className="img-fluid" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

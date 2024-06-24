import React from 'react';
import './About.css'; // Make sure to import the CSS file
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <Container className="about-page my-4">
      <h1>Welcome to Fitsen, your go-to destination for authentic Dutch bicycles. Our peer-to-peer e-commerce platform connects cycling enthusiasts with a wide range of high-quality, durable Dutch bikes, directly from the Netherlands.</h1>

      <h2>Our Mission</h2>
      <p>At Fitsen, we are dedicated to promoting a sustainable and healthy lifestyle through cycling. Our mission is to provide a seamless and secure platform for buying and selling Dutch bikes, ensuring a top-notch experience for both buyers and sellers.</p>

            {/* New Section: Visual Elements */}
            <div className="visual-elements">
        <img src={`${process.env.PUBLIC_URL}/images/about/about-office.jpg`} alt="Fietsen office" className="responsive-image" />
      </div>

      <h2>Why Dutch Bikes?</h2>
      <p>Dutch bikes are renowned for their durability, comfort, and elegant design. Ideal for city commuting and leisure rides, these bikes offer a unique blend of functionality and style, making them a popular choice among cyclists worldwide.</p>

      <Row className="values-section my-4">
        <Col md={4} className="value text-center">
          <FontAwesomeIcon icon={faLeaf} className="icon text-tertiary mb-2" />
          <h3>Sustainability</h3>
          <p>We believe in eco-friendly transportation and are committed to reducing carbon footprints through cycling.</p>
        </Col>
        <Col md={4} className="value text-center">
          <FontAwesomeIcon icon={faStar} className="icon text-tertiary mb-2" />
          <h3>Quality</h3>
          <p>We ensure that every bike listed on our platform meets our high standards of quality and reliability.</p>
        </Col>
        <Col md={4} className="value text-center">
          <FontAwesomeIcon icon={faUsers} className="icon text-tertiary mb-2" />
          <h3>Community</h3>
          <p>We foster a vibrant community of cycling enthusiasts, encouraging knowledge sharing and experiences.</p>
        </Col>
      </Row>

      {/* New Section: Company History */}
      <h2>Company History</h2>
      <p>Fitsen was founded in [Year] with the goal of bringing the best Dutch bikes to the global market. Since then, we've grown into a leading platform for cycling enthusiasts.</p>

      {/* New Section: Visual Elements */}
      <div className="visual-elements">
        <img src={`${process.env.PUBLIC_URL}/images/about/about-dutch.jpg`} alt="Dutch Bike" className="responsive-image" />
      </div>

{/* Customer Testimonials Section */}
      <Carousel className="testimonials-carousel">
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <img
                className="testimonial-image d-block"
                src={`${process.env.PUBLIC_URL}/images/about/testimonial-1.png`}
                alt="First testimonial"
              />
              <blockquote className="testimonial-text">"I love my new Dutch bike from Fitsen! Great quality and service."</blockquote>
              <p className="testimonial-name">Araceli</p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <img
                className="testimonial-image d-block"
                src={`${process.env.PUBLIC_URL}/images/about/testimonial-2.png`}
                alt="Second testimonial"
              />
              <blockquote className="testimonial-text">"Fitsen made it easy to find the perfect bike for my city commutes."</blockquote>
              <p className="testimonial-name">Marie</p>
            </Col>
          </Row>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>


      <Row className="news-container my-4">
  <Col md={4} className="news-item mb-4">
    <Card>
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/news/expanding-our-collection.jpg`} alt="Expanding Our Collection" />
      <Card.Body>
        <Card.Title>Expanding Our Collection</Card.Title>
        <Card.Text>Fietsen now offers an even wider range of vintage Dutch bikes, curated to suit all your cycling needs.</Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4} className="news-item mb-4">
    <Card>
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/news/sustainability-initiative.jpg`} alt="Sustainability Initiative" />
      <Card.Body>
        <Card.Title>Sustainability Initiative</Card.Title>
        <Card.Text>We're committed to eco-friendly practices. Learn how Fietsen is making a difference in sustainable transportation.</Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4} className="news-item mb-4">
    <Card>
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/news/customer-stories.jpg`} alt="Customer Stories" />
      <Card.Body>
        <Card.Title>Customer Stories</Card.Title>
        <Card.Text>Discover how our customers are enjoying their Dutch bikes and read their inspiring cycling journeys.</Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>


      <h2>Contact Us</h2>
      <p>Have questions or need assistance? Feel free to <a href="/contact">contact us</a>. We're here to help!</p>
    </Container>
  );
}

export default About;

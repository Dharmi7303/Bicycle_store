import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';

function NavBar({ cartItems, onRemoveItem }) {
  const [cartBounce, setCartBounce] = useState(false);

  useEffect(() => {
    const closeCart = () => {
      // If there's any code you want to execute when clicking outside, add it here
    };

    window.addEventListener('click', closeCart);
    return () => window.removeEventListener('click', closeCart);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 500); // Match the duration of the bounce animation
    }
  }, [cartItems.length]); // Trigger the effect whenever the number of cart items changes

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="Your Logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SellBikeForm">
              <Nav.Link>Sell Your Bike</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/faqs">
              <Nav.Link>FAQs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
          <NavDropdown title={<FontAwesomeIcon icon={faShoppingCart} className={cartBounce ? "bounce" : ""} />} id="basic-nav-dropdown">
  {cartItems.length > 0 ? (
    cartItems.map((item, index) => (
      <NavDropdown.Item key={item.id || index}>
        <div className="cart-item">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-price"> Rs. {item.price}</div>
          <FontAwesomeIcon icon={faTrash} onClick={() => onRemoveItem(index)} className="delete-icon" />
        </div>
      </NavDropdown.Item>
    ))
  ) : (
    <NavDropdown.Item>Your cart is empty.</NavDropdown.Item>
  )}
  <NavDropdown.Divider />
  <NavDropdown.Item>Total: Rs. {totalPrice.toFixed(2)}</NavDropdown.Item>
  {cartItems.length > 0 && (
    <LinkContainer to="/cart">
      <Button className="primary-button-nav">
        Go To Cart
      </Button>
    </LinkContainer>
  )}
  </NavDropdown>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

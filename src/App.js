import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProductList from './components/ProductList/ProductList';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import ProductSearch from './components/ProductSearch/ProductSearch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import FAQ from './components/FAQ/FAQ';
import GenericBanner from './components/GenericBanner/GenericBanner';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import SellBikeForm from './components/SellBikeForm/SellBikeForm'; // Import SellBikeForm
import CookieConsent from './components/CookieConsent/CookieConsent'; // Import CookieConsent
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const productListRef = useRef(null);

  useEffect(() => {
    if (message !== '') {
      const timer = setTimeout(() => setMessage(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const addToCart = (product) => {
    const productWithImage = { ...product, image: 'product-image-url.jpg' };
    setCartItems([...cartItems, productWithImage]);
    setMessage(`Added "${product.name}" to the cart!`); // Set message when item is added
  };

  const onRemoveItem = (index) => {
    const productRemoved = cartItems[index].name;
    const newCartItems = cartItems.filter((item, itemIndex) => itemIndex !== index);
    setCartItems(newCartItems);
    setMessage(`Removed "${productRemoved}" from the cart.`); // Set message when item is removed
  };

  const scrollToProductList = () => {
    productListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Container fluid className="App">
        <NavBar // Use the NavBar component
          cartItems={cartItems}
          onRemoveItem={onRemoveItem}
        />
        {message && <div className="cart-message">{message}</div>}
        <Routes>
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/" element={
            <div>
              <Hero scrollToProductList={scrollToProductList} />
              <ProductSearch onSearch={handleSearch} />
              <div id="products" ref={productListRef}>
                <ProductList addToCart={addToCart} searchTerm={searchTerm} />
              </div>
              <GenericBanner />
            </div>
          } />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Define other routes here */}
          <Route path="/products" element={
            <div id="products" ref={productListRef}>
              <ProductList addToCart={addToCart} searchTerm={searchTerm} />
            </div>
          } />
          <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
          <Route path="/SellBikeForm" element={<SellBikeForm />} /> {/* Add the SellBikeForm route */}
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
        <Footer /> {/* Add the footer component here */}
      </Container>
      <CookieConsent /> {/* Add the CookieConsent component */}
    </Router>
  );
}

export default App;

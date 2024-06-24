import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><FontAwesomeIcon icon={faUser} className="icon-color" /> Seller: {product.seller}</p>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon-color" /> Location: {product.location}</p>
      <p><FontAwesomeIcon icon={faHeart} className="icon-color" /> Condition: {product.condition}</p>
      <p className="price-text">Price: Rs. {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to={`/products/${product.id}`} className="see-more-button">SEE MORE</Link> {/* Add this line */}
    </div>
  );
}

export default Product;

import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import { products } from '../ProductList/ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div className="alert alert-danger">Product not found</div>;
  }

// URL encoding for sharing the product name and URL
const shareUrl = encodeURIComponent(window.location.href);
const shareText = encodeURIComponent(`Check out this product: ${product.name}`);
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4">
            <strong><FontAwesomeIcon icon={faUser} className="icon-color" /> Seller:</strong> {product.seller}
          </div>
          <div className="mb-4">
            <strong><FontAwesomeIcon icon={faMapMarkerAlt} className="icon-color" /> Location:</strong> {product.location}
          </div>
          <div className="mb-4">
            <strong><FontAwesomeIcon icon={faHeart} className="icon-color" /> Condition:</strong> {product.condition}
          </div>
          <div className="mb-4">
            <strong>Price:</strong> Rs. {product.price}
          </div>
          <button onClick={() => addToCart(product)} className="primary-button">
            Add to Cart
          </button>
           {/* Share buttons */}
           <div className="social-share mt-4">
            <span className="mr-2">SHARE:</span>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${shareText}`} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      {/* Additional Content */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Key Features</h3>
          <ul>
            <li>Stylish design with modern aesthetics.</li>
            <li>High-quality materials for durability.</li>
            <li>Smooth and efficient gear shifting.</li>
            <li>Responsive brakes for safety.</li>
            {/* Add more key features here */}
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Customer Reviews</h3>
          <div className="customer-review">
            <p>Excellent bike! I love the design and performance.</p>
            <p className="text-muted">- Mustafa, Verified Buyer</p>
          </div>
          <div className="customer-review">
            <p>Great value for money. Highly recommended.</p>
            <p className="text-muted">- Aryavardhan, Happy Customer</p>
          </div>
          {/* Add more customer reviews here */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

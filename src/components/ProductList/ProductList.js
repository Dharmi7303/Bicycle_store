import React, { useState } from 'react';
import Product from './common/Product';
import './Product.css';

export const products = [
  { id: 1, name: 'INDIAN Cruiser', description: 'A classic bike with a retro feel.', seller: 'Rahul Sharma', location: 'Mumbai', condition: 'Good', price: 12000, image: '/images/bikes/bike-01.jpg' },
  { id: 2, name: 'City Commuter', description: 'Ideal for daily commutes.', seller: 'Ajay Patel', location: 'Ahmedabad', condition: 'Very Good', price: 15000, image: '/images/bikes/bike-02.jpg' },
  { id: 3, name: 'Retro Town', description: 'Stylish and comfortable.', seller: 'Vikram Sing', location: 'Jaipur', condition: 'Excellent', price: 18000, image: '/images/bikes/bike-03.jpg' },
  { id: 4, name: 'INDIAN Roadster', description: 'A sturdy bike for all weathers.', seller: 'Arjun Gupta', location: 'Delhi', condition: 'Good', price: 13000, image: '/images/bikes/bike-04.jpg' },
  { id: 5, name: 'Classic INDIAN', description: 'A reliable old bike.', seller: 'Rohit Kumar', location: 'Bengaluru', condition: 'Fair', price: 10000, image: '/images/bikes/bike-05.jpg' },
  { id: 6, name: 'Sporty City', description: 'Perfect for urban cycling.', seller: 'Manoj Yadav', location: 'Lucknow', condition: 'Very Good', price: 16000, image: '/images/bikes/bike-06.jpg' },
  { id: 7, name: 'Eco-Friendly', description: 'A green choice for the environment.', seller: 'Ankit Verma ', location: 'Bhopal', condition: 'Excellent', price: 20000, image: '/images/bikes/bike-07.jpg' },
  { id: 8, name: 'Lightweight Urban', description: 'Easy to carry and store.', seller: 'Pradeep Tiwari', location: 'Varanasi', condition: 'Good', price: 14000, image: '/images/bikes/bike-01.jpg' },
  { id: 9, name: 'Rugged Explorer', description: 'For the adventurous spirit.', seller: 'Priya Patel', location: 'Surat', condition: 'Fair', price: 11000, image: '/images/bikes/bike-02.jpg' },
  { id: 10, name: 'Speedy City', description: 'Fast and furious.', seller: 'Neha Singh', location: 'Patna', condition: 'Very Good', price: 17000, image: '/images/bikes/bike-03.jpg' },
  { id: 11, name: 'Family Tandem', description: 'Double the fun.', seller: 'Aarti Sharma', location: 'Chandigarh', condition: 'Good', price: 19000, image: '/images/bikes/bike-04.jpg' },
  { id: 12, name: 'Folding Commuter', description: 'Great for mixed-mode commuting.', seller: 'Pooja Kapoor', location: 'Jammu', condition: 'Good', price: 12500, image: '/images/bikes/bike-05.jpg' },
  { id: 13, name: 'Electric Assist', description: 'A little extra power.', seller: 'Deepika Reddy', location: 'Hyderabad', condition: 'Excellent', price: 21000, image: '/images/bikes/bike-06.jpg' },
  { id: 14, name: 'Touring Dutch', description: 'Built for long-distance comfort.', seller: 'Anjali Gupta', location: 'Kolkata', condition: 'Good', price: 18000, image: '/images/bikes/bike-07.jpg' },
  { id: 15, name: 'Hip City', description: 'Stand out in the crowd.', seller: 'Ritu Verma', location: 'Indore', condition: 'Very Good', price: 15500, image: '/images/bikes/bike-08.jpg' },
  { id: 16, name: 'Senior’s Comfort', description: 'Easy and comfortable.', seller: 'Sunita Tiwari', location: 'Ranchi', condition: 'Good', price: 13000, image: '/images/bikes/bike-01.jpg' },
  { id: 17, name: 'Stylish Cruiser', description: 'Cruise in style.', seller: 'Sanjay Choudhary', location: 'Raipur', condition: 'Fair', price: 10500, image: '/images/bikes/bike-02.jpg' },
  { id: 18, name: 'Vintage Dutch', description: 'A classic bike with a retro feel.', seller: 'Rajesh Joshi', location: 'Gandhinagar', condition: 'Good', price: 12000, image: '/images/bikes/bike-03.jpg' },
  { id: 19, name: 'City Commuter', description: 'Ideal for daily commutes.', seller: 'Shweta Sharma', location: 'Gandhinagar', condition: 'Very Good', price: 15000, image: '/images/bikes/bike-04.jpg' },
  { id: 20, name: 'Retro Town', description: 'Stylish and comfortable.', seller: 'Kavita Singh', location: 'Amritsar', condition: 'Excellent', price: 18000, image: '/images/bikes/bike-05.jpg' },
];

function ProductList({ addToCart, searchTerm }) {
  const initialProductsToShow = 16; // Change this to 16 to display 4 products in each row
  const [visibleProducts, setVisibleProducts] = useState(initialProductsToShow);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 16); // Increase by 16 for each "Load More" click
  };

  const hideProducts = () => {
    setVisibleProducts(initialProductsToShow);
  };

  // Filter products based on the search term
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-4"> {/* Use 'row-cols-md-4' to display 4 products in a row on medium and larger screens */}
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="col mb-4">
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="row">
          <div className="col-12">
            <button onClick={showMoreProducts} className="view-more-button">
              LOAD MORE...
            </button>
          </div>
        </div>
      )}
      {visibleProducts >= filteredProducts.length && (
        <div className="row">
          <div className="col-12">
            <button onClick={hideProducts} className="hide-button">
              HIDE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;

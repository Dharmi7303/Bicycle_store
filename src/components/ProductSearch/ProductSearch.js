import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the faTimes icon
import './ProductSearch.css';

function ProductSearch({ onSearch, productsCount }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="product-search input-group mb-3">
        <div className="input-group-prepend">
        <span className="magnifying" id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <div className="input-group-append">
          <button onClick={handleClearSearch} className="close-button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
      <div className="search-message">
        {searchTerm !== '' && productsCount !== null && (
          <p className="product-count">
            We've found {productsCount} product{productsCount !== 1 ? 's' : ''}.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;

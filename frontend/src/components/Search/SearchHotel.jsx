// src/components/Search/SearchHotel.jsx

import React from 'react';
import hotels from '../../assets/data/hotels.json';
import './search.css'; // Create this CSS file for styling

const SearchResult = () => {
  return (
    <div className="hotel-list-container">
      {hotels.map(hotel => (
        <div key={hotel.id} className="hotel-card">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h3 className="hotel-name">{hotel.name}</h3>
            <p className="hotel-location">{hotel.location}</p>
            <p className="hotel-rating">Rating: {hotel.rating} ⭐</p>
            <p className="hotel-price">Price: ₹{hotel.pricePerNight} / night</p>
            <p className="hotel-description">{hotel.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
// src/components/BusBooking/BusList.jsx
import React from 'react';
import './bus.css';

const BusList = ({ buses, onSelectBus }) => {
  return (
    <div className="bus-list-container">
      {buses.length > 0 ? (
        buses.map(bus => (
          <div key={bus.id} className="bus-card">
            <div className="bus-image-container">
              <img src={bus.photo} alt={bus.name} className="bus-image" />
            </div>
            <div className="bus-details">
              <h3>{bus.name} ({bus.type})</h3>
              <p>Route: {bus.from} → {bus.to}</p>
              <p>Departure: {bus.departureTime}</p>
              <p>Price: ₹{bus.price}</p>
              <button className="select-seats-btn" onClick={() => onSelectBus(bus)}>
                Select Seats
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No buses found for this route.</p>
      )}
    </div>
  );
};

export default BusList;
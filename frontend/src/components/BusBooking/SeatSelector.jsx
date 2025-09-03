// src/components/BusBooking/SeatSelector.jsx
import React, { useState } from 'react';
import './bus.css';

const SeatSelector = ({ bus, onBack, onPayment }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const isSeatBooked = (row, col) => {
    return bus.bookedSeats.includes(`${row + 1}${String.fromCharCode(97 + col)}`);
  };

  const isSeatSelected = (row, col) => {
    return selectedSeats.includes(`${row + 1}${String.fromCharCode(97 + col)}`);
  };

  const handleSeatClick = (row, col) => {
    const seatId = `${row + 1}${String.fromCharCode(97 + col)}`;
    if (isSeatBooked(row, col)) {
      return; // Cannot select a booked seat
    }
    if (isSeatSelected(row, col)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalPrice = selectedSeats.length * bus.price;

  return (
    <div className="seat-selector-container">
      <h3 className="text-2xl font-bold mb-4">Select Seats for {bus.name}</h3>
      <div className="seat-map-grid">
        {bus.seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seatType, colIndex) => {
              const seatId = `${rowIndex + 1}${String.fromCharCode(97 + colIndex)}`;
              const isBooked = isSeatBooked(rowIndex, colIndex);
              const isSelected = isSeatSelected(rowIndex, colIndex);
              
              let seatClass = 'seat-icon';
              if (isBooked) {
                seatClass += ' booked';
              } else if (isSelected) {
                seatClass += ' selected';
              } else if (seatType === 's') {
                seatClass += ' available';
              } else {
                seatClass += ' available';
              }

              return (
                <div key={seatId} className={seatClass} onClick={() => handleSeatClick(rowIndex, colIndex)}>
                  {seatType === 's' ? 'S' : 'A'}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="selected-info">
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
        <p>Total Price: ₹{totalPrice}</p>
        <button onClick={() => onPayment(selectedSeats)} className="payment-btn">
          Proceed to Payment
        </button>
        <button onClick={onBack} className="back-btn">
          Back to Bus List
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;
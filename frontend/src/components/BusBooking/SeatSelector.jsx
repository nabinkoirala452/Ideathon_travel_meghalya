// src/components/BusBooking/SeatSelector.jsx
import React, { useState } from 'react';

const SeatSelector = ({ bus, onBack, onPayment }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const isSeatBooked = (row, col) => {
    return bus.bookedSeats.includes(`${row + 1}${String.fromCharCode(97 + col)}`);
  };

  const isSeatSelected = (row, col) => {
    return selectedSeats.includes(`${row + 1}${String.fromCharCode(97 + col)}`);
  };

  const handleSeatClick = (row, col, seatType) => {
    if (seatType === 'a') {
      return;
    }
    const seatId = `${row + 1}${String.fromCharCode(97 + col)}`;
    if (isSeatBooked(row, col)) {
      return;
    }
    if (isSeatSelected(row, col)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalPrice = selectedSeats.length * bus.price;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto my-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Select Seats for {bus.name}</h3>

      {/* 🚀 This is the new bus seat map container */}
      <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
        <div className="flex flex-col gap-4">
          {bus.seatLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center items-center gap-3">
              {row.map((seatType, colIndex) => {
                const seatId = `${rowIndex + 1}${String.fromCharCode(97 + colIndex)}`;
                
                // 🚀 Conditional rendering for seats vs. aisle
                if (seatType === 'a') {
                  // This is the aisle, rendered as a spacer
                  return <div key={seatId} className="w-10 h-10"></div>;
                }
                
                const isBooked = isSeatBooked(rowIndex, colIndex);
                const isSelected = isSeatSelected(rowIndex, colIndex);
                
                const seatClass = `
                  w-10 h-10 flex items-center justify-center font-bold text-sm
                  rounded-lg cursor-pointer transition-colors duration-200
                  ${isBooked ? 'bg-red-400 text-white cursor-not-allowed' :
                    isSelected ? 'bg-blue-500 text-white' :
                    'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                `;

                return (
                  <div key={seatId} className={seatClass} onClick={() => handleSeatClick(rowIndex, colIndex, seatType)}>
                    {seatId}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {/* 🚀 New UI for seat legends */}
      <div className="flex justify-center gap-6 mt-4 text-sm font-medium text-gray-600">
          <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-gray-200 rounded-sm"></span>
              <span>Available</span>
          </div>
          <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-red-400 rounded-sm"></span>
              <span>Booked</span>
          </div>
          <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-blue-500 rounded-sm"></span>
              <span>Selected</span>
          </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-lg font-semibold">Selected Seats: {selectedSeats.join(', ')}</p>
        <p className="text-2xl font-bold mt-2">Total Price: ₹{totalPrice}</p>
      </div>
      <div className="mt-6 flex justify-between gap-4">
        <button
          onClick={() => onPayment(selectedSeats)}
          className="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Proceed to Payment
        </button>
        <button
          onClick={onBack}
          className="flex-1 bg-gray-400 text-white font-bold py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Back to Bus List
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;
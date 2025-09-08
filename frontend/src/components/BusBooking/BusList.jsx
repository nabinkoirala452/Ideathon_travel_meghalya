// src/components/BusBooking/BusList.jsx
import React from 'react';

const BusList = ({ buses, onSelectBus }) => {
  return (
    <div className="flex flex-col gap-5 max-w-4xl mx-auto my-8">
      {buses.length > 0 ? (
        buses.map(bus => (
          <div key={bus.id} className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="w-64 h-48 flex-shrink-0">
              <img src={bus.photo} alt={bus.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{bus.name} ({bus.type})</h3>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Route:</span> {bus.from} → {bus.to}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Departure:</span> {bus.departureTime}
                </p>
                <p className="text-gray-600 mt-2 text-xl font-bold">
                  ₹{bus.price}
                </p>
              </div>
              <button
                className="bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={() => onSelectBus(bus)}
              >
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
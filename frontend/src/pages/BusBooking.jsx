// src/pages/BusBooking.jsx
import React, { useState } from "react";
import BusList from "../components/BusBooking/BusList";
import SeatSelector from "../components/BusBooking/SeatSelector";
import busesData from "../assets/data/buses.json";
import { toast } from "react-toastify";
import "../components/BusBooking/bus.css"; // Ensure you import the CSS file

const BusBooking = () => {
  const [showBusList, setShowBusList] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowBusList(true);
  };

  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
  };

  const handlePayment = (seats) => {
    if (seats.length === 0) {
      toast.error("Please select at least one seat.");
      return;
    }
    toast.success(`Booking confirmed for ${selectedBus.name}. Seats: ${seats.join(', ')}. Total: ₹${seats.length * selectedBus.price}`);
    setSelectedBus(null); 
    setShowBusList(false);
  };

  return (
    <section className="px-12 py-8">
      <h2 className="text-3xl font-bold mb-4 text-BaseColor">🚌 Book a Bus</h2>
      <p className="text-gray-700 mb-6">
        Book your bus tickets for hassle-free travel.
      </p>

      {!showBusList && (
        <form onSubmit={handleSearch} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1 font-semibold">From</label>
            <input type="text" placeholder="Enter origin" className="border px-4 py-2 w-full rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">To</label>
            <input type="text" placeholder="Enter destination" className="border px-4 py-2 w-full rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <input type="date" className="border px-4 py-2 w-full rounded" />
          </div>
          <button type="submit" className="bg-BaseColor text-white px-6 py-2 rounded hover:bg-BHoverColor">
            Search Buses
          </button>
        </form>
      )}

      {showBusList && !selectedBus && (
        <BusList buses={busesData} onSelectBus={handleSelectBus} />
      )}

      {selectedBus && (
        <SeatSelector
          bus={selectedBus}
          onBack={() => setSelectedBus(null)}
          onPayment={handlePayment}
        />
      )}
    </section>
  );
};

export default BusBooking;
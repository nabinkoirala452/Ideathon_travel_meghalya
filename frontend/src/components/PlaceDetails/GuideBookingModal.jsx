import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GuideBookingModal = ({ guide, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  // FIX: Add a conditional check to prevent the TypeError
  const [selectedFare, setSelectedFare] = useState(
    guide.fares && guide.fares.length > 0 ? guide.fares[0] : null
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedFare) {
      alert("Please select a date and fare.");
      return;
    }

    console.log(`Booking for ${guide.name} confirmed!`);
    console.log(`Date: ${selectedDate.toDateString()}`);
    console.log(`Fare: ${selectedFare.type} - $${selectedFare.price}`);

    setShowConfirmation(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {showConfirmation ? (
          <div className="p-8 text-center">
            <h4 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed! 🎉</h4>
            <p className="text-gray-700 mb-4">
              Thank you for booking with {guide.name}. A confirmation email has been sent to you with your e-ticket.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <strong>Booking Summary:</strong>
              </p>
              <p>Date: {selectedDate.toDateString()}</p>
              <p>Fare: {selectedFare?.type || "N/A"} - ${selectedFare?.price || 0}</p>
            </div>
            <button
              onClick={onClose}
              className="mt-6 bg-BaseColor text-white font-bold py-2 px-6 rounded-lg hover:bg-BHoverColor"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="p-6 border-b">
              <h4 className="text-2xl font-bold">Booking for {guide.name}</h4>
              <p className="text-sm text-gray-500">Choose your date and tour package</p>
            </div>

            <div className="p-6">
              {/* Date & Time Picker */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Select Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Click to select a date"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-BaseColor"
                />
              </div>

              {/* Fares and Prices Section */}
              <div>
                <h5 className="text-xl font-semibold mb-3">Fares and Prices</h5>
                <div className="grid gap-4">
                  {guide.fares && guide.fares.length > 0 ? (
                    guide.fares.map((fare) => (
                      <label
                        key={fare.id}
                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedFare?.id === fare.id
                            ? "bg-blue-100 border-BaseColor ring-2 ring-BaseColor"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="fareOption"
                            value={fare.id}
                            checked={selectedFare?.id === fare.id}
                            onChange={() => setSelectedFare(fare)}
                            className="mr-3 text-BaseColor focus:ring-BaseColor"
                          />
                          <div>
                            <span className="block font-medium text-lg">{fare.type}</span>
                            <span className="block text-sm text-gray-500">{fare.groupSize}</span>
                          </div>
                        </div>
                        <span className="font-bold text-xl">${fare.price}</span>
                      </label>
                    ))
                  ) : (
                    <p className="text-gray-500">No pricing information available.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t flex justify-between items-center">
              <div className="text-lg font-bold">
                Total: <span className="text-BaseColor">${selectedFare?.price || 0}</span>
              </div>
              <button
                type="submit"
                className="bg-BaseColor text-white font-bold py-3 px-8 rounded-lg hover:bg-BHoverColor transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedDate || !selectedFare}
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default GuideBookingModal;
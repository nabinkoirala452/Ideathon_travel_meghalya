// src/components/Search/SearchHotel.jsx

// src/components/Search/SearchHotel.jsx

import React, { useState } from 'react';
import hotels from '../../assets/data/hotels.json';
import './search.css';

// The BookingForm component for user input
const BookingForm = ({ hotel, onClose }) => {
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '',
    phoneNumber: '',
    guestCount: 1,
    roomType: 'single'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Booking Confirmed! 🎉
      Hotel: ${hotel.name}
      Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phoneNumber}
      Room Type: ${formData.roomType}
      Guests: ${formData.guestCount}
      
      Thank you for booking with us!
    `);
    onClose();
  };

  if (!hotel) {
    return null;
  }

  // Use optional chaining with the OR operator to prevent crashes if 'availability' is missing
  const availableRoomTypes = Object.keys(hotel.availability || {});

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <h4 className="font-bold">Book a room at {hotel.name}</h4>
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>

      <div className="availability-info">
        <h5 className="font-semibold text-gray-600 mb-2">Room Availability:</h5>
        <ul>
          {Object.entries(hotel.availability || {}).map(([type, count]) => (
            <li key={type} className="text-gray-700">
              <span className="capitalize font-medium">{type} room:</span> {count} available
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Contact Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            {availableRoomTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Number of Guests</label>
          <input
            type="number"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            min="1"
            required
          />
        </div>
        <button type="submit" className="bg-BaseColor text-white px-4 py-2 rounded hover:bg-BHoverColor">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

// The main SearchHotel component that displays the list of hotels
const SearchHotel = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBookingClick = (hotel) => {
    setSelectedHotel(hotel);
  };

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
            <p className="hotel-contact">📞 {hotel.contactNumber}</p>
            <p className="hotel-description mt-2">{hotel.description}</p>
            <button
              onClick={() => handleBookingClick(hotel)}
              className="book-button bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
      {selectedHotel && (
        <div className="modal-overlay">
          <BookingForm hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
        </div>
      )}
    </div>
  );
};

export default SearchHotel;













// import React, { useState } from 'react';
// import hotels from '../../assets/data/hotels.json';
// import './search.css';

// // The updated BookingForm component
// // The updated BookingForm component with the 'Confirm Booking' button
// const BookingForm = ({ hotel, onClose }) => {
//   const [formData, setFormData] = useState({ 
//     fullName: '', 
//     email: '',
//     phoneNumber: '',
//     guestCount: 1,
//     roomType: 'single'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`
//       Booking Confirmed! 🎉
//       Hotel: ${hotel.name}
//       Name: ${formData.fullName}
//       Email: ${formData.email}
//       Phone: ${formData.phoneNumber}
//       Room Type: ${formData.roomType}
//       Guests: ${formData.guestCount}
      
//       Thank you for booking with us!
//     `);
//     onClose();
//   };

//   if (!hotel) {
//     return null;
//   }

//   const availableRoomTypes = Object.keys(hotel.availability);

//   return (
//     <div className="booking-form-container">
//       <div className="booking-form-header">
//         <h4 className="font-bold">Book a room at {hotel.name}</h4>
//         <button onClick={onClose} className="close-btn">&times;</button>
//       </div>

//       <div className="availability-info">
//         <h5 className="font-semibold text-gray-600 mb-2">Room Availability:</h5>
//         <ul>
//           {Object.entries(hotel.availability || {}).map(([type, count]) => (
//             <li key={type} className="text-gray-700">
//               <span className="capitalize font-medium">{type} room:</span> {count} available
//             </li>
//           ))}
//         </ul>
//       </div>

//       <form onSubmit={handleSubmit} className="mt-4 space-y-3">
//         <div>
//           <label className="block text-sm font-semibold mb-1">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold mb-1">Contact Number</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold mb-1">Room Type</label>
//           <select
//             name="roomType"
//             value={formData.roomType}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           >
//             {availableRoomTypes.map(type => (
//               <option key={type} value={type}>
//                 {type.charAt(0).toUpperCase() + type.slice(1)}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-semibold mb-1">Number of Guests</label>
//           <input
//             type="number"
//             name="guestCount"
//             value={formData.guestCount}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             min="1"
//             required
//           />
//         </div>
//         {/* The 'Confirm Booking' button is here */}
//         <button type="submit" className="bg-BaseColor text-white px-4 py-2 rounded hover:bg-BHoverColor">
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// };
// export default BookingForm; // You'll need to export the new component if it's in its own file.
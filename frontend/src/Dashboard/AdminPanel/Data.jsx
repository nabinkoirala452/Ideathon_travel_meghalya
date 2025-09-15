import React, { useState, useEffect } from 'react';


const cabBookingsData = [
  { id: 1, name: 'Alice Smith', driver: 'Rahul Sharma', vehicle: 'MH-01 AB 1234', destination: 'Cherrapunji', pickup: 'Shillong', price: 2500, completed: false },
  { id: 2, name: 'Bob Johnson', driver: 'Amit Verma', vehicle: 'AS-01 CD 5678', destination: 'Dawki', pickup: 'Guwahati', price: 4000, completed: false },
  { id: 3, name: 'Charlie Davis', driver: 'Biren Das', vehicle: 'ML-05 EF 9012', destination: 'Mawlynnong', pickup: 'Shillong', price: 3000, completed: true },
  { id: 4, name: 'David Wilson', driver: 'Sunil Roy', vehicle: 'ML-05 GH 3456', destination: 'Cherrapunji', pickup: 'Shillong', price: 2500, completed: false },
  { id: 5, name: 'Eva Brown', driver: 'Manoj Kumar', vehicle: 'AS-01 IJ 7890', destination: 'Umiam Lake', pickup: 'Nongpoh', price: 1000, completed: true },
  { id: 6, name: 'Frank White', driver: 'Rajesh Sen', vehicle: 'MH-01 KL 2345', destination: 'Nongkhnum Island', pickup: 'Nongstoin', price: 5000, completed: false },
];

const hotelBookingsData = [
  { id: 1, name: 'Leo Hall', hotel: 'Grand Plaza', roomType: 'Double Bed', guests: 2, arrival: '2025-09-20', leaving: '2025-09-23', price: 9000, completed: false },
  { id: 2, name: 'Mia Young', hotel: 'City Stay Inn', roomType: 'Single Room', guests: 1, arrival: '2025-09-21', leaving: '2025-09-22', price: 3000, completed: true },
  { id: 3, name: 'Noah Clark', hotel: 'Lake View Resorts', roomType: 'Suite', guests: 3, arrival: '2025-09-20', leaving: '2025-09-25', price: 15000, completed: false },
  { id: 4, name: 'Olivia Adams', hotel: 'Grand Plaza', roomType: 'Double Bed', guests: 4, arrival: '2025-09-23', leaving: '2025-09-25', price: 6000, completed: false },
];

const guideBookingsData = [
  { id: 1, name: 'John Doe', guideName: 'Alex Kharlukhi', place: 'Nohkalikai Falls', date: '2025-09-15', price: 1500, completed: false },
  { id: 2, name: 'Jane Smith', guideName: 'Sarah Warjri', place: 'Mawmluh Cave', date: '2025-09-16', price: 1200, completed: true },
  { id: 3, name: 'Sam Brown', guideName: 'James Rymbai', place: 'Shillong Peak', date: '2025-09-17', price: 1800, completed: false },
];

const busBookingsData = [
  { id: 1, name: 'Peter Jones', busName: 'Super Express', route: 'Shillong to Siliguri', seats: '1A, 1B', date: '2025-09-20', price: 1000, completed: false },
  { id: 2, name: 'Mary Lee', busName: 'Luxury Cruiser', route: 'Cherrapunjee to Shillong', seats: '3C', date: '2025-09-21', price: 300, completed: true },
  { id: 3, name: 'Kevin Chen', busName: 'Green City Bus', route: 'Guwahati to Shillong', seats: '2D, 2E', date: '2025-09-22', price: 900, completed: false },
];

// Reusable component to display a booking list
const BookingSection = ({ title, data, capacity, columns }) => {
  const [bookings, setBookings] = useState([]);
  const isOverbooked = bookings.length > capacity;

  useEffect(() => {
    setBookings(data);
  }, [data]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 my-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-BaseColor">{title}</h2>
      
      {/* Status Indicators */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium text-gray-700">
          <span className="font-bold">Current Bookings:</span> {bookings.length}
        </p>
        <p className={`text-sm font-bold px-3 py-1 rounded-full ${isOverbooked ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>
          {isOverbooked ? 'Overbooked' : 'Open'}
        </p>
      </div>

      {/* Booking List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id || index} className="border-b hover:bg-gray-50 transition-colors">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 text-sm text-gray-700">
                    {col.accessor(booking)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main component to render the entire dashboard
const BookingDashboard = () => {
  // Column definitions for each booking type
  const cabColumns = [
    { header: 'Booked By', accessor: (b) => b.name },
    { header: 'Driver Name', accessor: (b) => b.driver },
    { header: 'Vehicle No.', accessor: (b) => b.vehicle },
    { header: 'Route', accessor: (b) => `${b.pickup} to ${b.destination}` },
    { header: 'Price', accessor: (b) => `₹${b.price}` },
    { header: 'Status', accessor: (b) => b.completed ? 'Completed' : 'Pending' },
  ];

  const hotelColumns = [
    { header: 'Booked By', accessor: (b) => b.name },
    { header: 'Hotel Name', accessor: (b) => b.hotel },
    { header: 'Room Type', accessor: (b) => b.roomType },
    { header: 'Guests', accessor: (b) => b.guests },
    { header: 'Dates', accessor: (b) => `${b.arrival} to ${b.leaving}` },
    { header: 'Price', accessor: (b) => `₹${b.price}` },
    { header: 'Status', accessor: (b) => b.completed ? 'Completed' : 'Pending' },
  ];

  const guideColumns = [
    { header: 'Booked By', accessor: (b) => b.name },
    { header: 'Guide Name', accessor: (b) => b.guideName },
    { header: 'Place', accessor: (b) => b.place },
    { header: 'Date', accessor: (b) => b.date },
    { header: 'Price', accessor: (b) => `₹${b.price}` },
    { header: 'Status', accessor: (b) => b.completed ? 'Completed' : 'Pending' },
  ];

  const busColumns = [
    { header: 'Booked By', accessor: (b) => b.name },
    { header: 'Bus Name', accessor: (b) => b.busName },
    { header: 'Route', accessor: (b) => b.route },
    { header: 'Seats', accessor: (b) => b.seats },
    { header: 'Date', accessor: (b) => b.date },
    { header: 'Price', accessor: (b) => `₹${b.price}` },
    { header: 'Status', accessor: (b) => b.completed ? 'Completed' : 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-BaseColor">Admin Booking Dashboard</h1>
        <p className="text-center text-gray-600 mb-8">
          Monitor and manage all bookings from one place.
        </p>

        <BookingSection
          title="Cab Booking"
          data={cabBookingsData}
          capacity={5}
          columns={cabColumns}
        />

        <BookingSection
          title="Hotel Booking"
          data={hotelBookingsData}
          capacity={5}
          columns={hotelColumns}
        />
        
        <BookingSection
          title="Guide Booking"
          data={guideBookingsData}
          capacity={5}
          columns={guideColumns}
        />

        <BookingSection
          title="Bus Booking"
          data={busBookingsData}
          capacity={5}
          columns={busColumns}
        />
      </div>
    </div>
  );
};

export default BookingDashboard;

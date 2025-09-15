import React, { useState, useEffect } from 'react';

// Hard-coded data for each booking section
// In a real application, this data would be fetched from a server.
const cabBookingsData = [
  { name: 'Alice Smith', from: 'Koramangala', time: '10:00 AM' },
  { name: 'Bob Johnson', from: 'Indiranagar', time: '10:15 AM' },
  { name: 'Charlie Davis', from: 'HSR Layout', time: '10:30 AM' },
  { name: 'David Wilson', from: 'Electronic City', time: '10:45 AM' },
  { name: 'Eva Brown', from: 'Marathahalli', time: '11:00 AM' },
  { name: 'Frank White', from: 'Whitefield', time: '11:15 AM' },
];

const hotelBookingsData = [
  { name: 'Leo Hall', hotel: 'Grand Plaza', checkIn: '2025-09-20', guests: 2 },
  { name: 'Mia Young', hotel: 'City Stay Inn', checkIn: '2025-09-21', guests: 1 },
  { name: 'Noah Clark', hotel: 'Grand Plaza', checkIn: '2025-09-20', guests: 3 },
  { name: 'Olivia Adams', hotel: 'Lake View Resorts', checkIn: '2025-09-23', guests: 4 },
];

// Reusable component to display a booking list
const BookingSection = ({ title, data, capacity }) => {
  const [bookings, setBookings] = useState([]);
  const isOverbooked = bookings.length > capacity;

  // Use useEffect to simulate data loading on component mount
  useEffect(() => {
    setBookings(data);
  }, [data]);

  return (
    <div style={styles.sectionContainer}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.statusContainer}>
        <p>
          <strong>Current Bookings:</strong> {bookings.length}
        </p>
        <p>
          <strong>Booking Threshold:</strong> {capacity}
        </p>
      </div>

      <div style={isOverbooked ? styles.blockedMessage : styles.openMessage}>
        {isOverbooked ? (
          <p>⚠️ BOOKING BLOCKED: Maximum capacity reached.</p>
        ) : (
          <p>✅ Booking is Open. All systems are operational.</p>
        )}
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Details</th>
            <th style={styles.tableHeader}>Time/Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{booking.name}</td>
              <td style={styles.tableCell}>{booking.from || booking.hotel}</td>
              <td style={styles.tableCell}>{booking.time || booking.checkIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main component to render the entire dashboard
const BookingDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.mainHeader}>Admin Booking Dashboard</h1>
      <p style={styles.subHeader}>
        This dashboard provides a real-time (hard-coded) overview of all booking services.
      </p>

      <BookingSection
        title="Cab Booking"
        data={cabBookingsData}
        capacity={5}
      />

      <BookingSection
        title="Hotel Booking"
        data={hotelBookingsData}
        capacity={5}
      />
    </div>
  );
};

// Simple inline styles for a clean look
const styles = {
  dashboardContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    color: '#333',
  },
  mainHeader: {
    color: '#2c3e50',
    textAlign: 'center',
  },
  subHeader: {
    textAlign: 'center',
    color: '#7f8c8d',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '20px auto',
    padding: '20px',
  },
  sectionTitle: {
    color: '#34495e',
    borderBottom: '2px solid #ecf0f1',
    paddingBottom: '10px',
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  openMessage: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '15px',
  },
  blockedMessage: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '15px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px',
    textAlign: 'left',
  },
  tableCell: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
  },
};

export default BookingDashboard;
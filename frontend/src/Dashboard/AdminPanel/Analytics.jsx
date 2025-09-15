import React from "react";

// Hard-coded Data for Analytics
const bookingsData = {
  totalBookings: 25,
  totalRevenue: 65000,
  cabBookings: [
    { name: 'Alice Smith', price: 2500, completed: false },
    { name: 'Bob Johnson', price: 4000, completed: false },
    { name: 'Charlie Davis', price: 3000, completed: true },
    { name: 'David Wilson', price: 2500, completed: false },
    { name: 'Eva Brown', price: 1000, completed: true },
  ],
  hotelBookings: [
    { name: 'Leo Hall', price: 9000, completed: false },
    { name: 'Mia Young', price: 3000, completed: true },
    { name: 'Noah Clark', price: 15000, completed: false },
    { name: 'Olivia Adams', price: 6000, completed: false },
  ],
  guideBookings: [
    { name: 'John Doe', price: 1500, completed: false },
    { name: 'Jane Smith', price: 1200, completed: true },
    { name: 'Sam Brown', price: 1800, completed: false },
  ],
  busBookings: [
    { name: 'Peter Jones', price: 1000, completed: false },
    { name: 'Mary Lee', price: 300, completed: true },
    { name: 'Kevin Chen', price: 900, completed: false },
  ],
  hotels: [
    { name: 'Grand Plaza', totalRooms: 20, bookedRooms: 12 },
    { name: 'City Stay Inn', totalRooms: 15, bookedRooms: 15 },
    { name: 'Lake View Resorts', totalRooms: 30, bookedRooms: 20 },
  ],
  guides: [
    { name: 'Alex Kharlukhi', booked: true },
    { name: 'Sarah Warjri', booked: true },
    { name: 'James Rymbai', booked: false },
    { name: 'Elina Laitflang', booked: false },
  ],
  // Data for tourist spots with crowd information and ticket availability
  touristSpots: [
    { name: "Cherrapunjee", crowdStatus: "Crowded", ticketAvailability: 50, maxTickets: 100 },
    { name: "Mawlynnong", crowdStatus: "Heavily Crowded", ticketAvailability: 15, maxTickets: 50 },
    { name: "Shillong", crowdStatus: "Not Crowded", ticketAvailability: 80, maxTickets: 100 },
    { name: "Umiam Lake", crowdStatus: "Crowded", ticketAvailability: 65, maxTickets: 150 },
    { name: "Dawki", crowdStatus: "Heavily Crowded", ticketAvailability: 20, maxTickets: 80 },
  ],
  // New data for cab fleet
  cabs: [
    { id: 1, driver: 'Rahul Sharma', status: 'Booked' },
    { id: 2, driver: 'Amit Verma', status: 'Booked' },
    { id: 3, driver: 'Biren Das', status: 'Booked' },
    { id: 4, driver: 'Sunil Roy', status: 'Booked' },
    { id: 5, driver: 'Manoj Kumar', status: 'Free' },
    { id: 6, driver: 'Rajesh Sen', status: 'Free' },
    { id: 7, driver: 'Vikram Singh', status: 'Booked' },
    { id: 8, driver: 'Alok Kumar', status: 'Free' },
  ]
};

const Analytics = () => {
  // Helper functions for calculations
  const totalTicketsSold = bookingsData.busBookings.length;
  const totalBusRevenue = bookingsData.busBookings.reduce((sum, b) => sum + b.price, 0);
  const availableBusSeats = 100 - bookingsData.busBookings.length * 2; // Assuming 2 seats per booking for simplicity
  
  const bookedGuides = bookingsData.guideBookings.length;
  const freeGuides = bookingsData.guides.length - bookedGuides;

  const totalHotelRooms = bookingsData.hotels.reduce((sum, h) => sum + h.totalRooms, 0);
  const bookedHotelRooms = bookingsData.hotels.reduce((sum, h) => sum + h.bookedRooms, 0);
  const vacantHotelRooms = totalHotelRooms - bookedHotelRooms;
  const hotelOccupancyRate = ((bookedHotelRooms / totalHotelRooms) * 100).toFixed(2);
  
  const totalRevenue = bookingsData.totalRevenue;

  // Function to determine crowd status
  const getCrowdStatus = (status) => {
    switch (status) {
      case 'Heavily Crowded':
        return 'text-red-600';
      case 'Crowded':
        return 'text-yellow-600';
      case 'Not Crowded':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };
  

  const cabCapacity = bookingsData.cabBookings.length;
  const totalCabs = bookingsData.cabs.length;
  const availableCabs = bookingsData.cabs.filter(c => c.status === 'Free').length;

  // Determine cab crowding status
  let cabCrowdStatus = 'Not Crowded';
  if (availableCabs === 0) {
    cabCrowdStatus = 'Heavily Crowded';
  } else if (availableCabs < totalCabs / 3) {
    cabCrowdStatus = 'Crowded';
  }

  const bookingsByType = {
    cab: bookingsData.cabBookings.length,
    hotel: bookingsData.hotelBookings.length,
    guide: bookingsData.guideBookings.length,
    bus: bookingsData.busBookings.length,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-BaseColor">
          Admin Analytics Dashboard 📊
        </h1>
        <p className="text-center text-gray-600 mb-8">
          This dashboard provides a business overview and crowd-control insights.
        </p>

        {/* --- Key Metrics Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Revenue</h3>
            <p className="text-4xl font-bold mt-2 text-green-600">₹{totalRevenue.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Bookings</h3>
            <p className="text-4xl font-bold mt-2 text-BaseColor">{bookingsData.totalBookings}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Hotel Occupancy</h3>
            <p className="text-4xl font-bold mt-2 text-yellow-600">{hotelOccupancyRate}%</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Available Bus Seats</h3>
            <p className="text-4xl font-bold mt-2 text-purple-600">{availableBusSeats}</p>
          </div>
        </div>
        
        {/* --- Operational Status and Crowd Control --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Booking Breakdown */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-BaseColor">Bookings by Type</h3>
            <div className="space-y-2">
              <p className="flex justify-between text-sm text-gray-600">
                <span>Cab Bookings:</span> <span className="font-bold text-BaseColor">{bookingsByType.cab}</span>
              </p>
              <p className="flex justify-between text-sm text-gray-600">
                <span>Hotel Bookings:</span> <span className="font-bold text-BaseColor">{bookingsByType.hotel}</span>
              </p>
              <p className="flex justify-between text-sm text-gray-600">
                <span>Guide Bookings:</span> <span className="font-bold text-BaseColor">{bookingsByType.guide}</span>
              </p>
              <p className="flex justify-between text-sm text-gray-600">
                <span>Bus Bookings:</span> <span className="font-bold text-BaseColor">{bookingsByType.bus}</span>
              </p>
            </div>
          </div>
          
          {/* Tourist Spot Analytics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-BaseColor">Tourist Spot Analytics</h3>
            <div className="space-y-2">
              {bookingsData.touristSpots.map((spot, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-700">{spot.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getCrowdStatus(spot.crowdStatus) === 'text-red-600' ? 'bg-red-100 text-red-600' : getCrowdStatus(spot.crowdStatus) === 'text-yellow-600' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                      {spot.crowdStatus}
                    </span>
                    <span className="text-gray-600">Tickets: {spot.ticketAvailability}/{spot.maxTickets}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guide and Cab Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-BaseColor">Operational Status</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Total Guides:</span>
                <span className="font-bold text-BaseColor">{bookingsData.guides.length}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Guides Booked:</span>
                <span className="font-bold text-BaseColor">{bookedGuides}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Free Guides:</span>
                <span className="font-bold text-green-600">{freeGuides}</span>
              </div>
              <hr className="my-2 border-gray-200" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Total Cabs:</span>
                <span className="font-bold text-BaseColor">{totalCabs}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Available Cabs:</span>
                <span className="font-bold text-green-600">{availableCabs}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Cab Crowding Status:</span>
                <span className={`font-bold ${getCrowdStatus(cabCrowdStatus)}`}>{cabCrowdStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
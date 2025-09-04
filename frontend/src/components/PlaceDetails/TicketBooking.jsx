import React from "react";

// --- Data for the visitor chart ---
// In a real app, this would come from an API
const visitorData = [
  { time: "9AM", height: "h-8" },
  { time: "11AM", height: "h-20" },
  { time: "1PM", height: "h-32" },
  { time: "3PM", height: "h-24" },
  { time: "5PM", height: "h-16" },
  { time: "7PM", height: "h-12" },
];

const TicketBooking = () => {
  // In a real app, this would be fetched from a database.
  // Using a number relevant to a popular Indian tourist spot for context.
  const ticketsSoldToday = 482;

  return (
    // Main container using shades of red for background and border
    <div className="bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl shadow-xl p-6 border border-red-100 w-full max-w-md mx-auto">
      
      {/* --- Header --- */}
      <div className="flex items-center justify-between pb-4 border-b border-red-200">
        <h3 className="text-2xl font-bold text-BaseColor">Book Your Visit</h3>
        {/* Ticket Icon using BaseColor */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-BaseColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      </div>

      {/* --- Pricing Details --- */}
      <div className="my-5 space-y-3 text-sm">
        <div className="flex justify-between items-center text-gray-700">
          <span>Entry Fee (Adults / Children)</span>
          <span className="font-semibold text-gray-900">₹50 / ₹20</span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span>Parking Fee (Car / Two-wheeler)</span>
          <span className="font-semibold text-gray-900">₹100 / ₹30</span>
        </div>
      </div>
      
      {/* --- Tickets Sold Today Stat --- */}
      <div className="text-center bg-red-100/60 border border-red-200 rounded-xl p-4 my-6">
        <p className="text-sm font-medium text-red-800">Tickets Sold Today</p>
        <p className="text-5xl font-bold text-BaseColor tracking-tight">
          {ticketsSoldToday.toLocaleString('en-IN')}
        </p>
      </div>

      {/* --- Visitor Graph --- */}
      <div className="my-6">
        <h4 className="text-center text-sm font-medium text-red-800 mb-3">Today's Visitor Flow</h4>
        <div className="flex items-end justify-between h-40 px-2 pt-4 bg-red-100/40 rounded-lg">
          {visitorData.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-1/12">
              <div
                className={`w-full bg-red-500 rounded-t-md hover:bg-red-700 transition-all duration-300 ${item.height}`}
                style={{ transitionProperty: 'height, background-color' }}
              ></div>
            </div>
          ))}
        </div>
        {/* Graph Labels */}
        <div className="flex justify-between px-2 mt-1 text-xs text-gray-500">
          {visitorData.map((item, index) => (
            <span key={index} className="w-1/12 text-center">{item.time}</span>
          ))}
        </div>
      </div>
      
      {/* --- CTA Button --- */}
      <button className="w-full bg-red-700 text-white font-bold px-4 py-3 rounded-lg hover:bg-red-800 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/40">
        <span>Book Tickets Online</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

    </div>
  );
};

export default TicketBooking;
// src/components/Ticket/Ticket.jsx
import React, { useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import logo from '../../assets/images/logo3.png';

const Ticket = ({ bookingData, onBack }) => {
  const { date, adults, children, parking, total } = bookingData;
  const ticketId = Math.random().toString(36).substring(2, 8).toUpperCase();
  const ticketRef = useRef(null);

  const handleDownload = () => {
    const input = ticketRef.current;
    if (input) {
      const doc = new jsPDF('p', 'mm', 'a4');
      doc.html(input, {
        callback: function (doc) {
          doc.save(`ticket-${ticketId}.pdf`);
        },
        x: 10,
        y: 10,
        html2canvas: { scale: 0.55 }
      });
    }
  };

  return (
    <>
      {/* 🚀 This div contains only the ticket content to be converted to PDF */}
      <div id="ticket" ref={ticketRef} className="bg-white rounded-xl shadow-xl p-8 max-w-lg mx-auto my-8">
        <div className="flex items-center justify-between pb-4 border-b-2 border-red-700 mb-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Visit Meghalaya Logo" className="w-12 h-12" />
            <h1 className="text-3xl font-bold text-red-700">Visit Meghalaya</h1>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-600">Ticket ID:</p>
            <p className="text-lg font-bold text-red-700">{ticketId}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <p className="text-sm font-semibold text-gray-700">Booking Date</p>
            <p className="text-xl font-bold">{date}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Guests</p>
            <p className="text-xl font-bold">Adults: {adults}</p>
            {children > 0 && <p className="text-xl font-bold">Children: {children}</p>}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Parking</p>
            <p className="text-xl font-bold">{parking}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Amount Paid</p>
            <p className="text-2xl font-bold text-green-600">₹{total}</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t-2 border-red-700 flex justify-between items-center">
          <div className="text-xs text-gray-500">
            <p>*This is a digitally generated ticket.</p>
            <p>Please present this at the counter.</p>
          </div>
          <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded">
            <p className="text-xs text-gray-500 text-center">QR Code</p>
          </div>
        </div>
      </div>

      {/* 🚀 This div contains the buttons and will NOT be included in the PDF */}
      <div className="flex justify-between mt-8 max-w-lg mx-auto">
        <button onClick={onBack} className="bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded-lg hover:bg-gray-400">
          Back
        </button>
        <button onClick={handleDownload} className="bg-red-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-800">
          Download Ticket
        </button>
      </div>
    </>
  );
};

export default Ticket;
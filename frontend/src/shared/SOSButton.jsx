
import React, { useState } from 'react';
import { FaExclamationTriangle } from "react-icons/fa";
import { FaPhone, FaShareAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          toast.success(`Your location has been shared! Lat: ${latitude}, Long: ${longitude}.`);
          console.log("Map link:", mapUrl);
        },
        () => {
          toast.error("Unable to retrieve your location. Please check browser permissions.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="relative">
      <button
        className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg z-50 animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaExclamationTriangle className="text-2xl" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-3 flex flex-col gap-2 z-40 w-max">
          <button
            className="flex items-center gap-3 bg-gray-100 text-gray-800 p-3 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={() => window.location.href = 'tel:+919876543210'}
          >
            <FaPhone className="text-red-500" />
            <span className="text-sm font-semibold">Call Helpline</span>
          </button>
          <button
            className="flex items-center gap-3 bg-gray-100 text-gray-800 p-3 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={handleShareLocation}
          >
            <FaShareAlt className="text-blue-500" />
            <span className="text-sm font-semibold">Share Location</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SOSButton;




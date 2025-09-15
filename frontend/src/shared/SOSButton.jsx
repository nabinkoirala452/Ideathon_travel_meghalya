import React, { useState } from 'react';
import { FaExclamationTriangle } from "react-icons/fa";
import { FaPhone, FaShareAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShareLocation = () => {
    // Your existing location sharing code
  };

  const handleSendWhatsAppMessage = () => {
    const phoneNumber = '9198787538731'; // Your test number
    const message = encodeURIComponent("I need help! Please assist me with my problem.");
    
    // Use the whatsapp:// protocol for the desktop app
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

    // Open the URL
    window.open(whatsappUrl, '_self'); // Use '_self' to try and stay in the same tab

    // Fallback to the wa.me link if the protocol doesn't work
    setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }, 1000); // Wait 1 second before opening fallback
    
    setIsOpen(false);
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
            onClick={handleSendWhatsAppMessage}
          >
            <FaPhone className="text-red-500" />
            <span className="text-sm font-semibold">Message Helpline</span>
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
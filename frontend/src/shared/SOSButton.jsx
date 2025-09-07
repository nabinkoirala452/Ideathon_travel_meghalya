// // src/shared/SOSButton.jsx
// import React, { useState } from 'react';
// import { FaExclamationTriangle } from "react-icons/fa";
// import { FaPhone, FaShareAlt } from "react-icons/fa";

// const SOSButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleShareLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           alert(`Your current location is: Latitude ${latitude}, Longitude ${longitude}.`);
//         },
//         () => {
//           alert("Unable to retrieve your location. Please check your browser permissions.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   return (
//     <>
//       <button 
//         className="fixed bottom-5 right-5 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg z-50 animate-pulse"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <FaExclamationTriangle className="text-2xl" />
//       </button>

//       {isOpen && (
//         <div className="fixed bottom-20 right-5 bg-white rounded-lg shadow-xl p-3 flex flex-col gap-2 z-40">
//           <button 
//             className="flex items-center gap-3 bg-gray-100 text-gray-800 p-3 rounded-lg hover:bg-gray-200 transition-colors"
//             onClick={() => window.location.href = 'tel:+919876543210'}
//           >
//             <FaPhone className="text-red-500" />
//             <span className="text-sm font-semibold">Call Helpline</span>
//           </button>
//           <button 
//             className="flex items-center gap-3 bg-gray-100 text-gray-800 p-3 rounded-lg hover:bg-gray-200 transition-colors"
//             onClick={handleShareLocation}
//           >
//             <FaShareAlt className="text-blue-500" />
//             <span className="text-sm font-semibold">Share Location</span>
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default SOSButton;



// src/shared/SOSButton.jsx
import React, { useState } from 'react';
import { FaExclamationTriangle } from "react-icons/fa";
import { FaPhone, FaShareAlt } from "react-icons/fa";

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Your current location is: Latitude ${latitude}, Longitude ${longitude}.`);
        },
        () => {
          alert("Unable to retrieve your location. Please check your browser permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      <button 
        className="fixed top-1/2 right-5 -translate-y-1/2 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg z-50 animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaExclamationTriangle className="text-2xl" />
      </button>

      {isOpen && (
        <div className="fixed top-1/2 right-20 -translate-y-1/2 bg-white rounded-lg shadow-xl p-3 flex flex-col gap-2 z-40">
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
    </>
  );
};

export default SOSButton;




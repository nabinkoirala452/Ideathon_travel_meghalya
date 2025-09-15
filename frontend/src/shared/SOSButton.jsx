import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaExclamationTriangle, FaPhone, FaShareAlt, FaUser, FaTaxi, FaTicketAlt, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import guidesData from "../assets/data/guides.json";

const menuOptions = [
  { id: 'emergency', label: 'Emergency Call', icon: <FaPhone /> },
  { id: 'guide', label: 'Problem with Guide', icon: <FaUser /> },
  { id: 'cab', label: 'Problem with Cab', icon: <FaTaxi /> },
  { id: 'ticket', label: 'Problem with Ticket', icon: <FaTicketAlt /> },
];

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [problemType, setProblemType] = useState(null);
  const [selectedGuideId, setSelectedGuideId] = useState('');
  const [problemDescription, setProblemDescription] = useState('');

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          toast.success(`Your location has been shared! Lat: ${latitude}, Long: ${longitude}.`);
        },
        () => {
          toast.error("Unable to retrieve your location. Please check browser permissions.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const handleModalOpen = (type) => {
    if (type === 'emergency') {
      window.location.href = 'tel:+919876543210';
      setIsOpen(false);
      return;
    }
    setProblemType(type);
    setModalOpen(true);
    setIsOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setProblemType(null);
    setSelectedGuideId('');
    setProblemDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complain Submitted:", {
      problemType,
      selectedGuideId,
      problemDescription
    });
    
    toast.success("Complain received. We will contact you soon!");
    handleModalClose();
  };
  
  const renderModalContent = () => {
    switch (problemType) {
      case 'guide':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-BaseColor">Problem with Guide</h3>
            <div>
              <label className="block mb-1 font-semibold">Select Guide</label>
              <select 
                value={selectedGuideId} 
                onChange={(e) => setSelectedGuideId(e.target.value)} 
                className="w-full p-2 border rounded"
                required
              >
                <option value="">-- Select a Guide --</option>
                {guidesData.map(guide => (
                  <option key={guide.id} value={guide.id}>
                    {guide.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Complain</label>
              <textarea
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Describe your problem..."
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">
              Submit Complain
            </button>
          </form>
        );
      case 'cab':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-BaseColor">Problem with Cab</h3>
            <div>
              <label className="block mb-1 font-semibold">Complain</label>
              <textarea
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Describe your problem with the cab..."
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">
              Submit Complain
            </button>
          </form>
        );
      case 'ticket':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-BaseColor">Problem with Ticket</h3>
            <div>
              <label className="block mb-1 font-semibold">Complain</label>
              <textarea
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Describe your problem with the ticket..."
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">
              Submit Complain
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  const Modal = ({ children }) => {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-[100] p-4">
        <div className="relative bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
          <button
            onClick={handleModalClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
          {children}
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <div className="relative">
        <button
          className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg z-50 animate-pulse"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaExclamationTriangle className="text-2xl" />
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-3 flex flex-col gap-2 z-40 w-max">
            {menuOptions.map(option => (
              <button
                key={option.id}
                className="flex items-center gap-3 bg-gray-100 text-gray-800 p-3 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => handleModalOpen(option.id)}
              >
                {option.icon}
                <span className="text-sm font-semibold">{option.label}</span>
              </button>
            ))}
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

      {modalOpen && (
        <Modal>
          {renderModalContent()}
        </Modal>
      )}
    </>
  );
};

export default SOSButton;
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaImage, FaTag, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";
import { toast } from "react-toastify";

const ReportHiddenPlace = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    mapLink: '',
    photo: null,
    type: '',
    description: '',
    email: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          setFormData(prev => ({ ...prev, mapLink: mapUrl }));
          toast.success("Location retrieved successfully!");
        },
        () => {
          toast.error("Unable to retrieve location.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("New Hidden Place Reported:", formData);
      toast.success("Thank you! Your report has been submitted for review.");
      setIsSubmitting(false);
      setFormData({
        name: '',
        location: '',
        mapLink: '',
        photo: null,
        type: '',
        description: '',
        email: '',
      });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 my-8 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold text-BaseColor">Report a Hidden Place 🕵️‍♂️</h3>
          <p className="text-gray-600">Found a hidden gem? Share it with our community!</p>
        </div>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-BaseColor text-white font-bold py-2 px-6 rounded-lg hover:bg-BHoverColor transition-colors"
        >
          {isFormVisible ? 'Hide Form' : 'Show Form'}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Place Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-BaseColor focus:outline-none"
              placeholder="e.g., Wei Sawdong Falls"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">General Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-BaseColor focus:outline-none"
              placeholder="e.g., Cherrapunjee, Meghalaya"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-1">Map Location</label>
            <div className="relative flex">
              <input
                type="text"
                name="mapLink"
                value={formData.mapLink}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-l-lg focus:ring-2 focus:ring-BaseColor focus:outline-none"
                placeholder="Google Maps Link"
                required
              />
              <button
                type="button"
                onClick={handleGetLocation}
                className="bg-gray-200 text-gray-800 px-4 py-3 rounded-r-lg hover:bg-gray-300 transition-colors"
              >
                <FaMapMarkerAlt />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Place Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-BaseColor focus:outline-none"
              required
            >
              <option value="">-- Select Type --</option>
              <option value="waterfall">Waterfall</option>
              <option value="cave">Cave</option>
              <option value="bridge">Living Root Bridge</option>
              <option value="village">Village</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-BaseColor focus:outline-none"
              placeholder="Tell us what makes this place special..."
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-BaseColor focus:outline-none"
              placeholder="For us to contact you if needed"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-BaseColor text-white font-bold py-3 px-6 rounded-lg hover:bg-BHoverColor transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Place'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ReportHiddenPlace;

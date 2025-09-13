
import React, { useState, useEffect } from "react";
import guidesData from "../../assets/data/guides.json";
import { FaStar } from "react-icons/fa";
import { FaVenusMars } from "react-icons/fa6";
import avatar from "../../assets/images/boy-icon.png"; // Assuming this path is correct
import GuideBookingModal from "./GuideBookingModal";

const GuideBooking = ({ placeId }) => {
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState(null);

  useEffect(() => {
    const guides = guidesData.filter((guide) => guide.placeId === placeId);
    setFilteredGuides(guides);
  }, [placeId]);

  const handleBookClick = (guide) => {
    setSelectedGuide(guide);
  };

  const handleCloseModal = () => {
    setSelectedGuide(null);
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-BaseColor">Book Your Guide</h3>
      {filteredGuides.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={avatar}
                alt={guide.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold">{guide.name}</h4>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <FaVenusMars className="text-gray-500" /> {guide.gender}, {guide.age}
                </p>
                <p className="mt-2 text-gray-700 text-sm">
                  {guide.bio}
                </p>
                <div className="flex items-center mt-3 text-sm text-gray-800">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span>
                    {guide.reviews.length > 0
                      ? (
                          guide.reviews.reduce((sum, review) => sum + review.rating, 0) /
                          guide.reviews.length
                        ).toFixed(1)
                      : "Not Rated"}
                    ({guide.reviews.length} reviews)
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-t flex justify-center">
                <button
                  onClick={() => handleBookClick(guide)}
                  className="bg-BaseColor text-white font-bold py-2 px-6 rounded-lg hover:bg-BHoverColor"
                >
                  Book {guide.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No guides available for this location.</p>
      )}

      {selectedGuide && (
        <GuideBookingModal guide={selectedGuide} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default GuideBooking;
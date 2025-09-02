// src/components/tours/TourCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CalculateAvg from "../utils/CalculateAvg";

const TourCard = ({ tour }) => {
  // Use 'id' instead of '_id', default reviews to empty array
  const { photo, title, city, desc, id, reviews = [], featured } = tour;

  const { avgRating } = CalculateAvg(reviews);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-[380px] flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <img className="w-full h-40 object-cover" src={photo} alt={title} />
        {featured && (
          <p className="absolute pr-8 pl-4 text-white font-semibold py-1 bottom-2 rounded-l-full right-0 bg-BHoverColor text-lg">
            Featured
          </p>
        )}
      </div>

      {/* Content Section */}
      <div className="px-6 py-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <p className="text-base">{city}</p>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span>
              {avgRating} ({reviews.length})
            </span>
          </div>
        </div>

        <div className="font-bold text-lg mb-2">
          <Link to={`/tours/${id}`} className="py-2 block">
            {title.length > 20 ? title.substring(0, 20) + "..." : title}
          </Link>

          <p className="text-gray-700 text-base font-light">
            {desc.length > 80 ? desc.substring(0, 80) + "..." : desc}
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="px-6 pb-4 flex justify-end">
        <Link to={`/tours/${id}`} className="btn text-sm">
          Let's Go
        </Link>
      </div>
    </div>
  );
};

export default TourCard;

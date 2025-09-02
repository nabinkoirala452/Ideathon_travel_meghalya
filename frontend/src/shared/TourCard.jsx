// src/components/tours/TourCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CalculateAvg from "../utils/CalculateAvg";

const TourCard = ({ tour }) => {
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

      {/* Content Section - now also contains the button */}
      <div className="px-6 py-4 flex flex-col flex-1">
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

        {/* Button Section - placed at the end of the flex container */}
        <div className="mt-auto">
          <Link
            to={`/tours/${id}`}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded w-full text-center hover:bg-red-600 transition-colors"
          >
            Let's Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import placesData from "../assets/data/places.json";

const PlacesToVisit = () => {
  // Get the tour ID from the URL (e.g., "02")
  const { tourId } = useParams(); 
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    // 🚀 Filter the JSON data based on the tourId from the URL
    const places = placesData.filter(place => place.tourId === tourId);
    setFilteredPlaces(places);
  }, [tourId]); // Re-run effect when the tourId changes

  return (
    <section className="px-12 py-8">
      <h2 className="text-3xl font-bold mb-4 text-BaseColor">
        {tourId ? `Places to Visit` : 'All Places to Visit'} 📍
      </h2>
      <p className="text-gray-700 mb-6">
        Explore nearby attractions and activities during your tour.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map(place => (
            <div key={place.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={place.photo} alt={place.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{place.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{place.location}</p>
              <p className="text-gray-700">{place.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No places found for this location.</p>
        )}
      </div>
    </section>
  );
};

export default PlacesToVisit;
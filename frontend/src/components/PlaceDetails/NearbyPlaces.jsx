import React from "react";

const NearbyPlaces = () => {
  const nearbyPlaces = [
    { 
      name: "Mawsmai Cave", 
      distance: "2", 
      CrowdStatus: "Less Crowdy", 
      weather: { temp: 22, condition: "Cloudy" } 
    },
    { 
      name: "Dainthlen Falls", 
      distance: "11", 
      CrowdStatus: "More Crowdy", 
      weather: { temp: 21, condition: "Light Rain" } 
    },
    { 
      name: "Arwah Cave", 
      distance: "5", 
      CrowdStatus: "More Crowdy", 
      weather: { temp: 22, condition: "Partly Cloudy" } 
    },
    { 
      name: "Double Decker Living Root Bridge", 
      distance: "15", 
      CrowdStatus: "More Crowdy", 
      weather: { temp: 20, condition: "Drizzling" } 
    }
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      {/* 🚀 Updated class to match the theme color */}
      <h3 className="text-xl font-semibold mb-2 text-BaseColor">Nearby Places to Visit</h3>
      <ul className="divide-y divide-gray-300">
        {nearbyPlaces.map((place, index) => (
          <li key={index} className="py-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{place.name}</span>
              <span className="text-gray-600 text-sm">{place.distance} km away</span>
            </div>
            <div className="text-xs text-gray-500 mt-1 flex justify-between">
              <span>Weather: {place.weather.temp}°C, {place.weather.condition}</span>
              <span>Crowd Status: <span className={`font-semibold ${place.CrowdStatus === "Less Crowdy" ? 'text-green-600' : 'text-red-600'}`}>{place.CrowdStatus}</span></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyPlaces;
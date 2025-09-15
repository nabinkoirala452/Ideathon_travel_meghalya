import React from "react";
import { Link } from "react-router-dom";
import MapDisplay from "./MapDisplay";

const NearbyPlaces = () => {
  const nearbyPlaces = [
    { 
      name: "Nohkalikai Falls", 
      id: "cherapunjee-1",
      distance: "7", 
      CrowdStatus: "More Crowdy", 
      weather: { temp: 22, condition: "Foggy" },
      lat: 25.262,
      lng: 91.736
    },
    { 
      name: "Arwah Cave", 
      id: "cherapunjee-8",
      distance: "4", 
      CrowdStatus: "Less Crowdy", 
      weather: { temp: 21, condition: "Partly Cloudy" },
      lat: 25.265,
      lng: 91.735
    },
    { 
      name: "Dainthlen Falls", 
      id: "cherapunjee-4",
      distance: "10", 
      CrowdStatus: "Less Crowdy", 
      weather: { temp: 21, condition: "Drizzling" },
      lat: 25.228,
      lng: 91.722
    },
    { 
      name: "Double Decker Living Root Bridge", 
      id: "cherapunjee-2",
      distance: "18", 
      CrowdStatus: "More Crowdy", 
      weather: { temp: 20, condition: "Light Rain" },
      lat: 25.250,
      lng: 91.748
    }
  ];

  // The main place of interest is now Mawmluh Cave, which will be highlighted on the map
  const mainPlace = {
      name: "Mawmluh Cave",
      lat: 25.255,
      lng: 91.731,
      id: "cherapunjee-6"
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2 text-BaseColor">Nearby Places to Mawmluh Cave</h3>
        <ul className="divide-y divide-gray-300">
          {nearbyPlaces.map((place, index) => (
            <li key={index} className="py-2">
              <Link to={`/place/${place.id}`} className="block">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{place.name}</span>
                  <span className="text-gray-600 text-sm">{place.distance} km away</span>
                </div>
                <div className="text-xs text-gray-500 mt-1 flex justify-between">
                  <span>Weather: {place.weather.temp}°C, {place.weather.condition}</span>
                  <span>Crowd Status: <span className={`font-semibold ${place.CrowdStatus === "Less Crowdy" ? 'text-green-600' : 'text-red-600'}`}>{place.CrowdStatus}</span></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Pass both the main place and the nearby places to the map component */}
      <MapDisplay mainPlace={mainPlace} nearbyPlaces={nearbyPlaces} />
    </div>
  );
};

export default NearbyPlaces;
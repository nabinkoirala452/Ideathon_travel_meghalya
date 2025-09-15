
import React from "react";

const MapDisplay = ({ nearbyPlaces }) => {
  // We'll generate a URL to mark multiple points. 
  // It uses the places' names, which Google often resolves well enough for general plotting.
  // The 'q' parameter is for search, which accepts locations separated by a pipe '|'
  const mapUrl = `https://maps.google.com/maps?q=${nearbyPlaces.map(p => p.name).join('|')}&output=embed`;

  return (
    <div className="bg-gray-100 rounded-lg shadow-md mb-6 p-2">
      <h3 className="text-xl font-semibold mb-2 text-BaseColor">Map of Nearby Places</h3>
      <div className="overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
        ></iframe>
      </div>
    </div>
  );
};

export default MapDisplay;



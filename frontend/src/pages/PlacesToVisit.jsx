import React from "react";

const PlacesToVisit = () => {
  const places = [
    { name: "Central Park", desc: "A beautiful park to relax." },
    { name: "City Museum", desc: "Explore local history and culture." },
    { name: "Adventure Lake", desc: "Enjoy boating and water sports." },
  ];

  return (
    <section className="px-12 py-8">
      <h2 className="text-3xl font-bold mb-4 text-BaseColor">📍 Places to Visit</h2>
      <p className="text-gray-700 mb-6">
        Explore nearby attractions and activities during your tour.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">{place.name}</h3>
            <p className="text-gray-600">{place.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacesToVisit;

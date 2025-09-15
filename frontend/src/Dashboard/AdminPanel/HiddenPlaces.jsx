import React, { useState } from 'react';
import { FaEye, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// Hard-coded data for reported hidden places
// In a real app, this would be fetched from a database.
const reportedPlacesData = [
  {
    id: 1,
    name: 'Wei Sawdong Falls',
    location: 'Cherrapunjee, Meghalaya',
    reportedBy: 'Alice Smith',
    email: 'alice.s@example.com',
    mapLink: 'https://www.google.com/maps?q=25.26,91.73',
    placeType: 'Waterfall',
    description: 'A beautiful three-tiered waterfall that requires a short, adventurous trek. Not well-known by tourists.',
    status: 'Pending', // 'Pending', 'Reviewed', 'Published', 'Rejected'
  },
  {
    id: 2,
    name: 'Garden of Caves',
    location: 'Laitryngew, Meghalaya',
    reportedBy: 'Bob Johnson',
    email: 'bob.j@example.com',
    mapLink: 'https://www.google.com/maps?q=25.25,91.74',
    placeType: 'Cave',
    description: 'A series of small caves and waterfalls in a lush green area. Perfect for a quiet afternoon.',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Tyrshi Falls',
    location: 'Jowai, Meghalaya',
    reportedBy: 'Charlie Davis',
    email: 'charlie.d@example.com',
    mapLink: 'https://www.google.com/maps?q=25.43,92.17',
    placeType: 'Waterfall',
    description: 'A majestic waterfall located next to a bridge, offering an easy view from a distance.',
    status: 'Reviewed',
  },
];

const HiddenPlaces = () => {
  const [places, setPlaces] = useState(reportedPlacesData);

  const handleStatusChange = (id, newStatus) => {
    setPlaces(
      places.map((place) =>
        place.id === id ? { ...place, status: newStatus } : place
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-BaseColor">
          Reported Hidden Gems 💎
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Review new places submitted by the community.
        </p>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <table className="min-w-full text-left bg-white border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">Place Name</th>
                <th className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">Reported By</th>
                <th className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">Place Type</th>
                <th className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {places.map((place) => (
                <tr key={place.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                    <a href={place.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {place.name}
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">{place.reportedBy}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 capitalize">{place.placeType}</td>
                  <td className="px-4 py-2 text-sm">
                    <span
                      className={`font-semibold px-2 py-1 rounded-full text-xs ${
                        place.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : place.status === 'Reviewed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {place.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm flex items-center gap-2">
                    <button
                      onClick={() => alert(`Details for ${place.name}: \n\n${place.description}\n\nSubmitted by: ${place.email}`)}
                      className="text-gray-500 hover:text-blue-600"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    {place.status !== 'Published' && (
                      <button
                        onClick={() => handleStatusChange(place.id, 'Published')}
                        className="text-gray-500 hover:text-green-600"
                        title="Publish Place"
                      >
                        <FaCheckCircle />
                      </button>
                    )}
                    {place.status !== 'Rejected' && (
                      <button
                        onClick={() => handleStatusChange(place.id, 'Rejected')}
                        className="text-gray-500 hover:text-red-600"
                        title="Reject Place"
                      >
                        <FaTimesCircle />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HiddenPlaces;

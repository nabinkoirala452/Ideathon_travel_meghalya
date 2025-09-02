
import { useState } from "react";
import SearchResult from "../components/Search/SearchHotel";

const HotelBooking = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true); // Set state to true to display results
  };

  return (
    <section className="px-12 py-8">
      <h2 className="text-3xl font-bold mb-4 text-BaseColor">
        🏨 Book a Hotel
      </h2>
      <p className="text-gray-700 mb-6">
        Find the best hotels near your tour destination.
      </p>
      <form onSubmit={handleSearch} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-semibold">Check-in Date</label>
          <input type="date" className="border px-4 py-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Check-out Date</label>
          <input type="date" className="border px-4 py-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Guests</label>
          <input
            type="number"
            placeholder="2"
            className="border px-4 py-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-BaseColor text-white px-6 py-2 rounded hover:bg-BHoverColor"
        >
          Search Hotels
        </button>
      </form>
      {showResults && <SearchResult />}
    </section>
  );
};

export default HotelBooking;

import React from "react";

const BusBooking = () => {
  return (
    <section className="px-12 py-8">
      <h2 className="text-3xl font-bold mb-4 text-BaseColor">🚌 Book a Bus</h2>
      <p className="text-gray-700 mb-6">
        Book your bus tickets for hassle-free travel.
      </p>

      <form className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-semibold">From</label>
          <input type="text" placeholder="Enter origin" className="border px-4 py-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">To</label>
          <input type="text" placeholder="Enter destination" className="border px-4 py-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Date</label>
          <input type="date" className="border px-4 py-2 w-full rounded" />
        </div>
        <button className="bg-BaseColor text-white px-6 py-2 rounded hover:bg-BHoverColor">
          Search Buses
        </button>
      </form>
    </section>
  );
};

export default BusBooking;

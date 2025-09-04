import React from "react";
import { useParams } from "react-router-dom";
import placesData from "../assets/data/places.json";
import { Link } from "react-router-dom";
import HistorySection from "../components/PlaceDetails/HistorySection";
import TicketBooking from "../components/PlaceDetails/TicketBooking";
import TripExpenseCalculator from "../components/PlaceDetails/TripExpenseCalculator";


const PlaceDetails = () => {
  const { id } = useParams();
  const place = placesData.find((p) => p.id === id);

  if (!place) {
    return (
      <section className="px-12 py-8">
        <h2 className="text-2xl font-bold text-red-500">Place not found ❌</h2>
      </section>
    );
  }

  return (
    <section className="px-12 py-8">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-BaseColor">{place.name}</h2>
      <p className="text-gray-600 mb-2">{place.location}</p>
      
      {/* Image */}
      <img
        src={place.photo}
        alt={place.name}
        className="w-full max-h-[400px] object-cover rounded-lg shadow mb-6"
      />

      {/* General description */}
      <p className="text-lg text-gray-700 mb-6">{place.description}</p>

      {/* Special content for Nohkalikai Falls */}
      {place.id === "cherapunjee-1" && (
        <div className="space-y-8">
          {/* History */}
          <div>
            <HistorySection />
          </div>

          {/* Ticket Booking */}
          <div>
            <TicketBooking />
          </div>

          {/* Virtual Guide */}
          <div>
            <TripExpenseCalculator />
          </div>

         
        </div>
      )}
    </section>
  );
};

export default PlaceDetails;

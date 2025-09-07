import React from "react";
import { useParams } from "react-router-dom";
import placesData from "../assets/data/places.json";
import { Link } from "react-router-dom";
import HistorySection from "../components/PlaceDetails/HistorySection";
import TicketBooking from "../components/PlaceDetails/TicketBooking";
import TripExpenseCalculator from "../components/PlaceDetails/TripExpenseCalculator";
// 🚀 Import the new GuideBooking component
import GuideBooking from "../components/PlaceDetails/GuideBooking";


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
      <div className="max-w-md rounded-lg overflow-hidden shadow mb-6 mx-auto">
        <img
          src={place.photo}
          alt={place.name}
          className="w-full h-auto object-cover"
        />
      </div>

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
    {/* 🚀 Render the GuideBooking component with the current placeId */}
    <GuideBooking placeId={place.id} />
    </section>
  );
};

export default PlaceDetails;
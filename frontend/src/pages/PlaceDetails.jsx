import React from "react";
import { useParams } from "react-router-dom";
import placesData from "../assets/data/places.json";
import HistorySection from "../components/PlaceDetails/HistorySection";
import TicketBooking from "../components/PlaceDetails/TicketBooking";
import TripExpenseCalculator from "../components/PlaceDetails/TripExpenseCalculator";
import GuideBooking from "../components/PlaceDetails/GuideBooking";
import WeatherDisplay from "../components/PlaceDetails/WeatherDisplay";
import NearbyPlaces from "../components/PlaceDetails/NearbyPlaces";
import AIPlan from "../components/PlaceDetails/AIPlan";
import CulturalGuide from "../components/PlaceDetails/CulturalGuide"; // 🚀 Import the new component

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
          {/* History Section */}
          <div>
            <HistorySection />
          </div>

          {/* Weather and Nearby Places */}
          <WeatherDisplay />
          <NearbyPlaces />

          {/* AI-Powered Travel Plan */}
          <AIPlan />

          {/* 🚀 Add the Cultural Guide here */}
          <CulturalGuide />

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

      {/* This component is always rendered */}
      <GuideBooking placeId={place.id} />
    </section>
  );
};

export default PlaceDetails;
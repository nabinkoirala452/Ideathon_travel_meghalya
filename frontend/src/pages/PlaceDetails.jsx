import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import placesData from "../assets/data/places.json";
import HistorySection from "../components/PlaceDetails/HistorySection";
import HistorySectionCave from "../components/PlaceDetails/HistorySectionMawmluh";
import TicketBooking from "../components/PlaceDetails/TicketBooking";
import TripExpenseCalculator from "../components/PlaceDetails/TripExpenseCalculator";
import GuideBooking from "../components/PlaceDetails/GuideBooking";
import WeatherDisplay from "../components/PlaceDetails/WeatherDisplay";
import WeatherDisplayCave from "../components/PlaceDetails/WeatherDisplayMawmluh";
import NearbyPlaces from "../components/PlaceDetails/NearbyPlaces";
import NearbyPlacesCave from "../components/PlaceDetails/NearbyPlacesMawmluh";
import AIPlan from "../components/PlaceDetails/AIPlan";
import AIPlanCave from "../components/PlaceDetails/AIPlanMawmluh";
import CulturalGuide from "../components/PlaceDetails/CulturalGuide";
import CulturalGuideCave from "../components/PlaceDetails/CultureGuideMawmluh";
import avatar from "../assets/images/avatar.jpg";
import { FaStar } from "react-icons/fa";

// This is the API function you provided
const fetchReviewSummary = async (reviewTexts) => {
    if (!reviewTexts || reviewTexts.length === 0) return "No reviews to summarize yet.";
    
    // ⚠️ Remember to get a free API key from Hugging Face and paste it here
    const API_URL = "https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6";
    const HUGGING_FACE_API_KEY = "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"; 
    // const HUGGING_FACE_API_KEY = import.meta.env.VITE_HUGGING_FACE_API_KEY;

    const inputData = reviewTexts.join(' ');
    
    try {
      const response = await fetch(API_URL, {
        headers: { 
          Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ inputs: inputData }),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      if (result && result[0] && result[0].summary_text) {
          return result[0].summary_text;
      }
      return "Could not generate summary.";

    } catch (error) {
      console.error("Error fetching review summary:", error);
      return "Error generating summary.";
    }
  };

const PlaceDetails = () => {
  const { id } = useParams();
  const place = placesData.find((p) => p.id === id);

  const [reviewSummary, setReviewSummary] = useState("Generating summary...");
  const reviewsArray = place?.reviews || [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const reviewTexts = reviewsArray.map(review => review.reviewText);
    if (reviewTexts && reviewTexts.length > 0) {
      fetchReviewSummary(reviewTexts).then(summary => {
        setReviewSummary(summary);
      });
    } else {
      setReviewSummary("No reviews available to summarize.");
    }
  }, [id, reviewsArray.length]);

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
      {/* Special content for Place ID = 2 */}
      {place.id === "cherapunjee-6" && (
        <div className="space-y-8">
          {/* History Section */}
          <div>
            <HistorySectionCave />
          </div>

          {/* Weather and Nearby Places */}
          <WeatherDisplayCave />
          <NearbyPlacesCave />

          {/* AI-Powered Travel Plan */}
          <AIPlanCave />

          {/* 🚀 Add the Cultural Guide here */}
          <CulturalGuideCave />

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

      {/* New Reviews Section */}
      <div className="my-8 border border-gray-200 rounded-md shadow-sm px-4 py-6 md:px-8 md:py-8">
          <h3 className="text-[25px] md:text-[35px] font-bold mb-4">
              Reviews ({reviewsArray.length})
          </h3>

          {/* The review summary is added here */}
          <div className="bg-gray-100 p-4 rounded-lg my-4">
              <p className="text-lg font-semibold text-gray-800">Review Summary:</p>
              <p className="text-gray-600 mt-2">{reviewSummary}</p>
          </div>

          {/* Render Reviews */}
          {reviewsArray?.map((review, index) => (
              <div key={index} className="py-3 px-4 border-b">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border overflow-hidden">
                          <img src={avatar} alt="user avatar" />
                      </div>
                      <div>
                          <h5 className="text-lg font-semibold">{review.username}</h5>
                      </div>
                  </div>
                  <div className="flex items-center justify-between px-12 py-3">
                      <p className="text-lg">{review.reviewText}</p>
                      <span className="flex items-center gap-1">
                          {review.rating} <FaStar className="text-BaseColor" />
                      </span>
                  </div>
              </div>
          ))}
      </div>
    </section>
  );
};

export default PlaceDetails;



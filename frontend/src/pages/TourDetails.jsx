// src/pages/TourDetails.jsx
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";
import { FaStar, FaMapPin, FaCity } from "react-icons/fa";
import CalculateAvg from "../utils/CalculateAvg";
import { toast } from "react-toastify";
import allTours from "../assets/data/allTours.json";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const TourDetails = () => {
  const { user } = useContext(AuthContext);
  const reviewMsgRef = useRef();
  const [tourRating, setTourRating] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Get tour data from allTours.json
  const tour = allTours.find(t => t._id === id);


  const {
    title = "",
    photo = "",
    desc = "",
    reviews = [],
    city = "",
    distance = "",
    maxGroupSize = "",
    address = "",
  } = tour || {};

  const reviewsArray = Array.isArray(reviews) ? reviews : [];
  const { avgRating } = CalculateAvg(reviewsArray);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (user) {
        const reviewData = {
          username: user.username,
          reviewText,
          rating: tourRating,
        };
        const response = await fetch(`${BASE_URL}/review/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reviewData),
        });
        const result = await response.json();
        if (response.ok) {
          window.location.reload();
        } else {
          toast.error(result.message);
        }
      } else {
        toast.error("Please Sign In first");
      }
    } catch (err) {
      toast.error("Server not responding");
      console.log(err);
    }
  };

  return (
    <section className="my-4 px-12 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 w-full">
          {/* Tour Image */}
          <div className="max-w-3xl max-h-[400px] rounded-md overflow-hidden">
            <img src={photo} alt={title} />
          </div>

          {/* Tour Info */}
          <div className="my-8 border border-gray-200 rounded-md shadow-sm px-4 py-6 md:px-8 md:py-8">
            <h2 className="text-[25px] md:text-[40px] font-bold mb-4 text-BaseColor text-center md:text-start">
              {title}
            </h2>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
              <div className="flex items-center gap-2">
                <FaStar />
                <span>
                  {avgRating} ({reviewsArray.length})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapPin />
                <span>{address}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mt-2">
              <div className="flex items-center gap-2">
                <FaCity />
                <span>{city}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <span>{distance}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPeopleGroup />
                <span>{maxGroupSize}</span>
              </div>
            </div>

            <h3 className="text-[22px] md:text-[30px] mt-6">Description</h3>
            <p className="text-gray-700">{desc}</p>
          </div>

          {/* 🚀 New Buttons Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <button onClick={() => navigate('/hotel-booking')} className="bg-BaseColor text-white py-3 px-6 rounded-lg shadow hover:bg-BHoverColor">
              🏨 Book a Hotel
            </button>
            <Link
              to={`/places-to-visit/${id}`}
              className="bg-BaseColor text-white py-3 px-6 rounded-lg shadow hover:bg-BHoverColor text-center"
            >
              📍 Places to Visit
            </Link>
            <button onClick={() => navigate('/bus-booking')} className="bg-BaseColor text-white py-3 px-6 rounded-lg shadow hover:bg-BHoverColor">
              🚌 Book a Bus
            </button>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-[25px] md:text-[35px] font-bold mb-4">
              Reviews ({reviewsArray.length})
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="flex gap-1 my-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    onClick={() => setTourRating(num)}
                    className={
                      tourRating === num
                        ? "cursor-pointer text-orange-800"
                        : "cursor-pointer text-orange-500 hover:text-orange-800"
                    }
                  >
                    <FaStar />
                  </span>
                ))}
              </div>

              <div className="flex my-8 gap-4 w-full border border-BaseColor rounded-full overflow-hidden">
                <input
                  type="text"
                  ref={reviewMsgRef}
                  placeholder="Share your thoughts"
                  className="focus:outline-none flex-1 py-2 px-4"
                />
                <button
                  type="submit"
                  className="bg-BaseColor hover:bg-BHoverColor py-2 px-6 text-white rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Render Reviews */}
            {reviewsArray?.map((review, index) => (
              <div key={index} className="py-3 px-4 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border overflow-hidden">
                    <img src={avatar} alt="user avatar" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">{review.username}</h5>
                    <p className="text-gray-700 text-sm">
                      {new Date(review.createdAt).toLocaleDateString("en-US", options)}
                    </p>
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
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
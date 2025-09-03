import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa"; // icon for Track Prices

// Sample data for typical costs in Meghalaya. You can easily update this list.
const priceData = [
  { item: "Local Taxi (Short Distance)", price: "₹200 - ₹500" },
  { item: "Budget Homestay (Per Night)", price: "₹1200 - ₹2500" },
  { item: "Standard Meal (Per Person)", price: "₹150 - ₹400" },
  { item: "Guided Day Trek", price: "₹1500 - ₹3000" },
  { item: "Local Khasi Meal", price: "₹250 - ₹500" },
];

const PriceTracker = ({ showLinkCard = false }) => {
  return (
    <section id="price-tracker" className="py-12 bg-gray-50 px-6 md:px-12">
      <h2 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-6 text-center text-BaseColor">
        Real Price Tracker
      </h2>
      <p className="text-center text-gray-700 mb-10 md:text-lg md:leading-8">
        Get a realistic idea of daily costs for products and services to avoid
        surprises and enjoy a seamless experience in Meghalaya.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {priceData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <h3 className="font-bold text-xl text-BaseColor mb-2">
              {item.item}
            </h3>
            <p className="text-gray-800 font-medium">{item.price}</p>
          </div>
        ))}

        {/* Extra card only when you want the link version */}
        {showLinkCard && (
          <Link
            to="/price-tracker"
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <FaChartLine className="text-4xl mb-3 text-BaseColor" />
            <h3 className="font-bold text-xl text-BaseColor mb-2">
              Track Prices
            </h3>
            <p className="text-gray-800 font-medium">
              Compare with your currency and plan smarter.
            </p>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PriceTracker;

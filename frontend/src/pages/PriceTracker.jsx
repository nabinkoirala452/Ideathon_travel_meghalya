import React, { useState } from "react";
import { convertPrice } from "../utils/convertPrice";

const priceData = [
  { item: "Local Taxi (Short Distance)", price: "₹200 - ₹500" },
  { item: "Local Taxi (Long Distance)", price: "₹800 - ₹1500" },
  { item: "Shared Jeep/Bus Ride", price: "₹50 - ₹150" },
  { item: "Budget Homestay (Per Night)", price: "₹1200 - ₹2500" },
  { item: "Standard Hotel (Per Night)", price: "₹2500 - ₹5000" },
  { item: "Luxury Hotel (Per Night)", price: "₹6000 - ₹12000" },
  { item: "Standard Meal (Per Person)", price: "₹150 - ₹400" },
  { item: "Local Khasi Meal", price: "₹250 - ₹500" },
  { item: "Street Snacks & Drinks", price: "₹50 - ₹150" },
  { item: "Tea/Coffee at Café", price: "₹100 - ₹250" },
  { item: "Tourist Spot Entry Fee", price: "₹20 - ₹100" },
  { item: "Guided Day Trek", price: "₹1500 - ₹3000" },
  { item: "Adventure Activities (Zipline/Boating)", price: "₹500 - ₹1500" },
  { item: "Local Handicrafts / Souvenirs", price: "₹100 - ₹1000" },
  { item: "Private Guide (Full Day)", price: "₹1200 - ₹2500" },
  { item: "Photography Tour", price: "₹800 - ₹2000" },
  { item: "Cultural Show / Performance", price: "₹150 - ₹500" },
  { item: "Bicycle Rental (Per Day)", price: "₹100 - ₹300" },
  { item: "Motorbike Rental (Per Day)", price: "₹400 - ₹800" },
  { item: "Fuel for Scooter/Car", price: "₹100 - ₹500" },
  { item: "Public Transport (Bus/Shared Jeep)", price: "₹20 - ₹150" },
  { item: "Local SIM/Internet Pack", price: "₹300 - ₹600" },
  { item: "Medical / Emergency Costs", price: "₹200 - ₹1000" },
];


const PriceTrack = () => {
  const [currency, setCurrency] = useState("USD");
  const [convertedData, setConvertedData] = useState([]);

  const handleConvert = () => {
    const newData = priceData.map((item) => ({
      ...item,
      converted: convertPrice(item.price, currency),
    }));
    setConvertedData(newData);
  };

  return (
    <section className="py-12 bg-gray-50 px-6 md:px-12">
      <h2 className="text-[30px] md:text-[38px] font-cursiveFont font-bold mb-6 text-center text-BaseColor">
        Real Price Tracker
      </h2>
      <p className="text-center text-gray-600 mb-10 md:text-lg md:leading-8">
        Get a realistic idea of daily costs in Meghalaya. Convert them into your
        own currency for smarter planning.
      </p>

      {/* Currency Converter Box */}
      <div className="max-w-md mx-auto mb-10 bg-white shadow-md rounded-xl p-5 flex items-center justify-between gap-4 border border-gray-100">
        <label className="font-medium text-gray-700 whitespace-nowrap">
          Convert to:
        </label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-BaseColor focus:outline-none text-gray-700"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>
        <button
          onClick={handleConvert}
          className="bg-BaseColor text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
        >
          <span role="img" aria-label="money">
            💸
          </span>{" "}
          Convert
        </button>
      </div>

      {/* Price Table */}
      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="w-full border-collapse shadow-md rounded-xl overflow-hidden text-sm md:text-base">
          <thead className="bg-BaseColor text-white">
            <tr>
              <th className="py-3 px-4 text-left font-medium">Item</th>
              <th className="py-3 px-4 text-left font-medium">Price (INR)</th>
              <th className="py-3 px-4 text-left font-medium">
                Converted Price ({currency})
              </th>
            </tr>
          </thead>
          <tbody>
            {(convertedData.length > 0 ? convertedData : priceData).map(
              (item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {item.item}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{item.price}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    {item.converted || "-"}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PriceTrack;

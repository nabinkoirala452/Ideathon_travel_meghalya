import React, { useState, useMemo } from "react";

// --- Pre-defined Costs (as per typical rates in the area) ---
const ADULT_TICKET_PRICE = 50;
const CHILD_TICKET_PRICE = 20;
const CAR_PARKING_FEE = 100;
const TWO_WHEELER_FEE = 30;
const AVG_FOOD_COST_PER_PERSON = 350; // A reasonable estimate for a meal & snacks

const TripExpenseCalculator = () => {
  // --- State for User Inputs ---
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [vehicle, setVehicle] = useState("none");
  const [foodBudget, setFoodBudget] = useState(AVG_FOOD_COST_PER_PERSON);
  const [souvenirCost, setSouvenirCost] = useState(0);

  // --- Real-time Calculation using useMemo for efficiency ---
  const totalCost = useMemo(() => {
    const ticketCost = (adults * ADULT_TICKET_PRICE) + (children * CHILD_TICKET_PRICE);
    const parkingCost = vehicle === 'car' ? CAR_PARKING_FEE : vehicle === 'twowheeler' ? TWO_WHEELER_FEE : 0;
    const totalPeople = adults + children;
    const estimatedFoodCost = totalPeople > 0 ? totalPeople * foodBudget : 0;
    
    return ticketCost + parkingCost + estimatedFoodCost + souvenirCost;
  }, [adults, children, vehicle, foodBudget, souvenirCost]);

  const handleReset = () => {
    setAdults(1);
    setChildren(0);
    setVehicle("none");
    setFoodBudget(AVG_FOOD_COST_PER_PERSON);
    setSouvenirCost(0);
  };

  // BaseColor is defined via an external stylesheet or a style tag in the parent component.
  // Example: <style>{`.text-BaseColor { color: #991b1b; }`}</style>
  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-red-100 rounded-2xl shadow-xl p-6 md:p-8 border border-red-200 w-full max-w-lg mx-auto">
      {/* --- Header --- */}
      <div className="flex items-center justify-between pb-4 border-b border-red-200">
        <h3 className="text-2xl font-bold text-BaseColor">Trip Budget Planner</h3>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-BaseColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>

      {/* --- Total Estimated Cost Display --- */}
      <div className="text-center my-6">
        <p className="text-sm text-red-800">Estimated Total Cost</p>
        <p className="text-5xl font-bold text-BaseColor tracking-tight">
          {totalCost.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
        </p>
      </div>

      {/* --- Input Controls --- */}
      <div className="space-y-5">
        {/* Group Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">Adults</label>
            <input type="number" min="0" value={adults} onChange={e => setAdults(Math.max(0, parseInt(e.target.value) || 0))} className="w-full p-2.5 mt-1 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Children</label>
            <input type="number" min="0" value={children} onChange={e => setChildren(Math.max(0, parseInt(e.target.value) || 0))} className="w-full p-2.5 mt-1 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition" />
          </div>
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Parking</label>
          <div className="grid grid-cols-3 gap-2 mt-1">
            {['None', 'Car', 'Two-wheeler'].map(v => (
              <button key={v} onClick={() => setVehicle(v.toLowerCase().replace('-', ''))} className={`p-2.5 text-sm rounded-lg border transition-all duration-200 font-medium ${vehicle === v.toLowerCase().replace('-', '') ? 'bg-red-800 text-white border-red-800 shadow-md' : 'bg-white text-gray-700 border-red-300 hover:bg-red-50 hover:border-red-400'}`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders for Variable Costs */}
        <div>
          <label className="text-sm font-semibold text-gray-700 flex justify-between">
            <span>Food Budget (per person)</span>
            <span className="font-bold text-BaseColor">₹{foodBudget}</span>
          </label>
          <input type="range" min="150" max="1000" step="50" value={foodBudget} onChange={e => setFoodBudget(parseInt(e.target.value))} className="w-full h-2 bg-red-100 rounded-lg appearance-none cursor-pointer accent-red-700 mt-1" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 flex justify-between">
            <span>Souvenirs & Other</span>
            <span className="font-bold text-BaseColor">₹{souvenirCost}</span>
          </label>
          <input type="range" min="0" max="5000" step="100" value={souvenirCost} onChange={e => setSouvenirCost(parseInt(e.target.value))} className="w-full h-2 bg-red-100 rounded-lg appearance-none cursor-pointer accent-red-700 mt-1" />
        </div>
      </div>
      
      {/* --- Reset Button --- */}
      <button onClick={handleReset} className="w-full mt-8 bg-red-100 text-red-800 font-bold py-3 px-4 rounded-lg hover:bg-red-200 transition text-sm flex items-center justify-center gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
        </svg>
        Reset Calculator
      </button>
    </div>
  );
};

export default TripExpenseCalculator;

import React from "react";

const HistorySection = () => {
  return (
    // Main container with neutral background and a subtle shadow
    <div className="bg-gray-100 rounded-xl shadow-lg p-8 border border-gray-200 transition-shadow duration-300 hover:shadow-2xl">
      
      {/* --- Section Header --- */}
      <div className="flex items-center border-b border-gray-300 pb-4 mb-4">
        {/* Inline SVG icon styled with BaseColor */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-BaseColor mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {/* Icon updated for cave/geology */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5l-7.5 7.5L4.5 12m7.5 7.5V4.5"
          />
        </svg>
        <h2 className="text-3xl font-bold tracking-tight text-BaseColor">
          The Geological Wonder of Mawmluh Cave
        </h2>
      </div>

      {/* --- Main Content --- */}
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          Located near Cherrapunjee (Sohra), the <strong className="font-semibold text-BaseColor">Mawmluh Cave</strong> is not only a natural wonder but also a site of immense global significance. It is renowned for its spectacular stalactite and stalagmite formations and its deep pools.
          It stretches for approximately <strong className="font-semibold text-BaseColor">7 km</strong>, making it one of the longest caves in India. The cave is famous for its historical link to a massive geological event.
        </p>
        <p>
          A stalagmite within the cave holds definitive geological proof of a major climate event that occurred about <strong className="font-semibold text-BaseColor">4,200 years ago</strong>. This event led to a massive and abrupt drought that significantly impacted human civilizations around the world, from Mesopotamia to Egypt. The geological epoch marking this event is named the <strong className="font-semibold text-BaseColor">Meghalayan Age</strong>, taking its name from the very state where this evidence was found.
        </p>

        {/* Integrated unique culture facts into a new sub-section */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold mb-2 text-BaseColor">🧠 Unique Local Culture & Global Significance</h4>
          <ul className="list-none space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Meghalayan Age:</span> The most recent of Earth's 97 geological ages is officially named after Meghalaya. The evidence for the defining climate event was found in a Mawmluh stalagmite.
            </li>
            <li>
              <span className="font-semibold">Local Access:</span> The cave is managed with local community support. Tourists can explore the cave's initial sections, which are generally well-lit and easily navigable.
            </li>
          </ul>
        </div>
      </div>

      {/* --- Highlighted Fact/Translation (Theme Matched) --- */}
      <div className="mt-6 border-l-4 border-BaseColor bg-BaseColorLightest p-4 rounded-r-lg">
        <div className="flex items-start">
          {/* Water droplet/tear icon styled with BaseColor */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-BaseColor mr-3 flex-shrink-0 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M13.5 10.5h-3m4.5 0c0-1.657 1.343-3 3-3V7.5a6 6 0 00-6-6v3h3zM9 12h6m-7.5 0V9.5a2.5 2.5 0 015 0V12m-5 0V9.5"
            />
          </svg>
          <p className="text-sm text-gray-800">
            The evidence for the global climate event that defines the **Meghalayan Age** is physically contained in the cave's rock formations, linking this local cave to a global geological timeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
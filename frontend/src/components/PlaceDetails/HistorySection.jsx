import React from "react";

const HistorySection = () => {
  return (
    // Main container with maroon gradient and smooth hover effect
    <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-xl shadow-lg p-8 border border-slate-200 transition-shadow duration-300 hover:shadow-2xl">
      
      {/* --- Section Header --- */}
      <div className="flex items-center border-b border-red-200 pb-4 mb-4">
        {/* Inline SVG icon styled in maroon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-700 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <h2 className="text-3xl font-bold text tracking-tight">
          The Legend of Nohkalikai
        </h2>
      </div>

      {/* --- Main Content --- */}
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          In the misty hills of Meghalaya lies{" "}
          <strong className="font-semibold text-red-700">Nohkalikai Falls</strong>, India’s tallest plunge waterfall, cascading from a height of approximately <span className="font-mono text-red-700">340 meters (1,115 ft)</span>.
          While its beauty is captivating, its name is rooted in a heartbreaking Khasi legend about a young mother named <strong className="font-semibold text-red-700">Ka Likai</strong>.
        </p>
        <p>
          Tragically, her jealous second husband committed an unthinkable act: he killed her infant daughter and cooked her flesh into a meal. Unaware, a famished Ka Likai ate the meal. Later, upon discovering the horrifying truth, she was consumed by an unbearable wave of <span className="italic text-red-700">grief and horror</span>. In her despair, she ran to the edge of the plateau and leaped to her death, giving the falls its name.
        </p>
      </div>

      {/* --- Highlighted Fact/Translation --- */}
      <div className="mt-6 border-l-4 border-red-600 bg-red-50 p-4 rounded-r-lg">
        <div className="flex items-start">
          {/* Water droplet/tear icon in maroon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M7.5 12.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 3v9.5" 
            />
          </svg>
          <p className="text-sm text-slate-800">
            The name <strong className="font-semibold text-red-700">“Nohkalikai”</strong> is a portmanteau from the Khasi language, translating to <em className="font-semibold not-italic text-red-700">“The Leap of Ka Likai.”</em>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default HistorySection;

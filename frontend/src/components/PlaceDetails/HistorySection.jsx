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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <h2 className="text-3xl font-bold tracking-tight text-BaseColor">
          The Tragic Legend of Nohkalikai
        </h2>
      </div>

      {/* --- Main Content --- */}
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          In the misty hills of Meghalaya lies{" "}
          <strong className="font-semibold text-BaseColor">Nohkalikai Falls</strong>, India’s tallest plunge waterfall, cascading from a height of approximately <span className="font-mono text-BaseColor">340 meters (1,115 ft)</span>.
          While its beauty is captivating, its name is rooted in a heartbreaking Khasi legend about a young mother named <strong className="font-semibold text-BaseColor">Ka Likai</strong>.
        </p>
        <p>
          Tragically, her jealous second husband committed an unthinkable act: he killed her infant daughter and cooked her flesh into a meal. Unaware, a famished Ka Likai ate the meal. Later, upon discovering the horrifying truth, she was consumed by an unbearable wave of <span className="italic text-gray-700">grief and horror</span>. In her despair, she ran to the edge of the plateau and leaped to her death, giving the falls its name.
        </p>

        {/* Integrated unique culture facts into a new sub-section */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold mb-2 text-BaseColor">🧠 Unique Local Culture in the Legend's Context</h4>
          <ul className="list-none space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Matrilineal Society:</span> The Khasi tribe, to which Ka Likai belonged, follows a unique social system where lineage and property are passed down from mother to daughter. This tradition gives women a central role in family and society.
            </li>
            <li>
              <span className="font-semibold">Sohra:</span> Cherrapunjee's local name is "Sohra," but the region's fame is tied to its local tales and unique culture.
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
              d="M7.5 12.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 3v9.5" 
            />
          </svg>
          <p className="text-sm text-gray-800">
            The name <strong className="font-semibold text-BaseColor">“Nohkalikai”</strong> is a portmanteau from the Khasi language, translating to <em className="font-semibold not-italic text-BaseColor">“The Leap of Ka Likai.”</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
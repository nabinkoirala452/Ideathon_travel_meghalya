import React from "react";

const CulturalGuide = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4 text-BaseColor">Cultural Guide & Travel Tips for Mawmluh Cave</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Do's & Don'ts Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold mb-2 text-green-600">✅ Do's & <span className="text-red-600">❌ Don'ts</span></h4>
          <ul className="list-none space-y-2 text-gray-700">
            <li>
              <span className="text-green-600 font-semibold">Do:</span> Wear sturdy, non-slip footwear.
            </li>
            <li>
              <span className="text-green-600 font-semibold">Do:</span> Carry a flashlight or headlamp for the cave's inner sections.
            </li>
            <li>
              <span className="text-red-600 font-semibold">Don't:</span> Touch the stalagmites and stalactites to preserve them.
            </li>
            <li>
              <span className="text-red-600 font-semibold">Don't:</span> Go alone or off the marked path, as the cave can be disorienting.
            </li>
          </ul>
        </div>

        {/* Essential Travel Tips Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold mb-2 text-purple-600">🎒 Essential Tips</h4>
          <ul className="list-none space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Cave Safety:</span> The cave floor can be slippery and wet. Be cautious while walking.
            </li>
            <li>
              <span className="font-semibold">Best Time to Visit:</span> The cave is best visited during the dry season (October to February) when the water levels are low.
            </li>
            <li>
              <span className="font-semibold">Say "Khublei" (Koo-blay):</span> It means "thank you" in the local Khasi language.
            </li>
            <li>
              <span className="font-semibold">Save on Travel:</span> Go in a shared taxi to save on travel fees.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CulturalGuide;
import React from "react";

const CulturalGuide = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4 text-BaseColor">Cultural Guide & Travel Tips</h3>

      {/* 🚀 Updated grid to a two-column layout for the remaining cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Do's & Don'ts Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold mb-2 text-green-600">✅ Do's & <span className="text-red-600">❌ Don'ts</span></h4>
          <ul className="list-none space-y-2 text-gray-700">
            <li>
              <span className="text-green-600 font-semibold">Do:</span> Respect local customs & dress modestly.
            </li>
            <li>
              <span className="text-green-600 font-semibold">Do:</span> Ask before taking photos of people.
            </li>
            <li>
              <span className="text-red-600 font-semibold">Don't:</span> Litter! Keep this beautiful region pristine.
            </li>
            <li>
              <span className="text-red-600 font-semibold">Don't:</span> Haggle with local vendors too much.
            </li>
          </ul>
        </div>

        {/* Essential Travel Tips Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold mb-2 text-purple-600">🎒 Essential Tips</h4>
          <ul className="list-none space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Waterproof Gear:</span> Rain is common, so always carry a raincoat.
            </li>
            <li>
              <span className="font-semibold">Save on Travel:</span> Go in a shared taxi to save on travel fees.
            </li>
            <li>
              <span className="font-semibold">Say "Khublei" (Koo-blay):</span> It means "thank you" in the local Khasi language.
            </li>
            <li>
              <span className="font-semibold">Stay Hydrated:</span> The humid climate can be draining.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CulturalGuide;
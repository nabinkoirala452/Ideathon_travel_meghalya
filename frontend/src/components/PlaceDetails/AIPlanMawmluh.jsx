import React from "react";

const AIPlan = () => {
  // Mock data needed for the AI plan
  const nearbyPlaces = [
    { name: "Nohkalikai Falls", distance: "7", CrowdStatus: "More Crowdy", travelTime: "10-15 mins" },
    { name: "Arwah Cave", distance: "4", CrowdStatus: "Less Crowdy", travelTime: "5-10 mins" },
    { name: "Dainthlen Falls", distance: "10", CrowdStatus: "Less Crowdy", travelTime: "15-20 mins" },
  ];

  const weather = {
    viewVisibility: {
      isFoggy: true,
      clearAt: "11:00 AM",
    },
    currentDescription: "light fog and drizzle",
  };

  // Find a good alternative place to visit
  const alternativePlace = nearbyPlaces.find(
    (place) => place.CrowdStatus === "Less Crowdy"
  );
  
  // Calculate total estimated time
  const travelTimeInMinutes = 5; 
  const explorationTimeInMinutes = 45; 
  const totalEstimatedTime = travelTimeInMinutes + explorationTimeInMinutes + travelTimeInMinutes; 

  return (
    <div className="bg-BaseColorLightest border-l-4 border-BaseColor text-BaseColorDarker p-4 my-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 text-BaseColor">AI-Powered Travel Plan 🤖</h3>
      <div className="text-gray-800">
        <p className="mb-2">
          Based on the current weather forecast for Mawmluh Cave (
          <span className="font-semibold capitalize">{weather.currentDescription}</span>), here is a suggested plan to make the most of your visit:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            The view of the cave entrance is currently <span className="font-bold">foggy and damp</span>. Instead of waiting, we recommend heading to a nearby attraction.
          </li>
          <li>
            Visit <span className="font-bold">{alternativePlace.name}</span>. It's only about{" "}
            <span className="font-bold">{alternativePlace.travelTime}</span> by cab from here.
          </li>
          <li>
            The estimated time to explore the falls is around 45 minutes. The total round trip is approximately <span className="font-bold">{totalEstimatedTime} minutes</span>.
          </li>
          <li>
            You can return to Mawmluh Cave afterward. The weather is estimated to be clearer around{" "}
            <span className="font-bold">{weather.viewVisibility.clearAt}</span>, giving you a better experience.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AIPlan;
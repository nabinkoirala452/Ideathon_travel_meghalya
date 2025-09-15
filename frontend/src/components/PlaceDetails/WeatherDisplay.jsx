import React from "react";

const WeatherDisplay = () => {
  const weather = {
    location: "Cherrapunjee",
    main: {
      temp: 21,
      feels_like: 23,
      humidity: 90,
    },
    weather: [
      {
        description: "light rain and cloudy",
        icon: "10d",
      },
    ],
    forecast: [
      { time: "In 2 hours", temp: 20, description: "overcast clouds", icon: "04d" },
      { time: "In 4 hours", temp: 19, description: "moderate rain", icon: "10d" },
      { time: "In 6 hours", temp: 18, description: "heavy rain", icon: "09n" },
    ],
    viewVisibility: {
      isFoggy: true,
      clearAt: "11:00 AM",
      message: "The current view of the falls is foggy. It is estimated that the view will be clear around 11:00 AM."
    }
  };

  const currentDescription = weather.weather[0]?.description || "N/A";
  const currentIconCode = weather.weather[0]?.icon;
  const currentIconUrl = `http://openweathermap.org/img/wn/${currentIconCode}@2x.png`;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-2 text-BaseColor">Current Weather in {weather.location}</h3>
      <div className="flex items-center space-x-4 mb-4">
        {currentIconCode && <img src={currentIconUrl} alt={currentDescription} className="w-16 h-16" />}
        <div>
          <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-gray-600 capitalize">{currentDescription}</p>
          <div className="mt-1 text-sm text-gray-700">
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        </div>
      </div>

      {weather.viewVisibility.isFoggy && (
        // 🚀 Updated classes for theme matching
        <div className="bg-BaseColorLightest border-l-4 border-BaseColor text-BaseColorDarker p-4 my-4 rounded" role="alert">
          <p className="font-bold">Important Notice</p>
          <p>{weather.viewVisibility.message}</p>
        </div>
      )}

      <h4 className="text-lg font-medium mb-2 text-BaseColor">Weather in the next few hours:</h4>
      <div className="flex justify-around text-center">
        {weather.forecast.map((hour, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-sm text-gray-500">{hour.time}</p>
            <img src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`} alt={hour.description} className="w-10 h-10" />
            <p className="text-sm font-semibold">{hour.temp}°C</p>
            <p className="text-xs text-gray-500 capitalize">{hour.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
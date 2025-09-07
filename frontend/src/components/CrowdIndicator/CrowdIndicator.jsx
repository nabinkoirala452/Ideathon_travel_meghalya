// src/components/CrowdIndicator/CrowdIndicator.jsx
import React from 'react';

const CrowdIndicator = ({ level }) => {
  let color = "bg-gray-400";
  let text = "Unknown";

  if (level === 'Not Crowded') {
    color = "bg-green-500";
    text = "Not Crowded";
  } else if (level === 'Crowded') {
    color = "bg-yellow-500";
    text = "Crowded";
  } else if (level === 'Heavily Crowded') {
    color = "bg-red-500";
    text = "Heavily Crowded";
  }

  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span>{text}</span>
    </div>
  );
};

export default CrowdIndicator;
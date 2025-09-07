// src/components/RightSideButtons.jsx
import React from 'react';
import Chatbot from '../../shared/chatbot';
import SOSButton from '../../shared/SOSButton';

const RightSideButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-1 z-50">
      {/* 🚀 The SOS Button will be positioned on top */}
      <SOSButton />
      {/* 🚀 The Chatbot will be positioned below it */}
      <Chatbot />
    </div>
  );
};

export default RightSideButtons;
// src/components/RightSideButtons.jsx
import React from 'react';
import Chatbot from '../../shared/chatbot';
import SOSButton from '../../shared/SOSButton';
import NotificationButton from "../Notification/Notification";

const RightSideButtons = () => {
  return (
    // <div className="fixed bottom-5 right-5 flex flex-col items-center gap-1 z-50">
  <div className="fixed top-1/2 right-5 -translate-y-1/2 flex flex-col items-center gap-1 z-50">
      {/* 🚀 The SOS Button will be positioned on top */}
      <NotificationButton />
      <SOSButton />
      {/* 🚀 The Chatbot will be positioned below it */}
      <Chatbot />
    </div>
  );
};

export default RightSideButtons;
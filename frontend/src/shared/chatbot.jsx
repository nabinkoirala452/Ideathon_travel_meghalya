// src/components/Chatbot/Chatbot.jsx

import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Check if the script is already loaded to avoid duplicates
    if (document.querySelector('script[src*="cdn.botpress.cloud"]')) {
      return;
    }

    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      // 🚀 Now inject the second script after the first has loaded
      const script2 = document.createElement('script');
      script2.src = "https://files.bpcontent.cloud/2025/09/03/14/20250903145620-MI6Z5TE5.js";
      script2.defer = true;
      document.body.appendChild(script2);
    };

    return () => {
      // Clean up the scripts to avoid duplicates on re-renders
      const scripts = document.querySelectorAll('script[src*="botpress"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null;
};

export default Chatbot;


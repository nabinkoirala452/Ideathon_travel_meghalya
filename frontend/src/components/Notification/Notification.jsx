import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
const [notifications, setNotifications] = useState([
  { id: 1, message: 'Heavy rainfall in Cherrapunji. Road to Nohkalikai Falls blocked until tomorrow.', isNew: true },
  { id: 2, message: 'Shillong–Dawki road is experiencing landslides. Expect 2–3 hours delay.', isNew: true },
  { id: 3, message: 'Umngot River water level rising. Boating activities suspended for safety.', isNew: true },
  { id: 4, message: 'Good weather in Shillong today. Perfect for sightseeing and outdoor walks.', isNew: false },
  { id: 5, message: 'Limited accommodation availability near Mawlynnong due to local festival.', isNew: true },
]);


  const newNotificationsCount = notifications.filter(n => n.isNew).length;

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setNotifications(notifications.map(n => ({ ...n, isNew: false })));
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleToggle}
        className="relative p-3 rounded-full bg-BaseColor text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <FaBell className="text-xl" />
        {newNotificationsCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {newNotificationsCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl p-4 z-50 max-h-80 overflow-y-auto">
          <h4 className="text-lg font-bold mb-4 text-BaseColor">Notifications</h4>
          {notifications.length > 0 ? (
            <ul className="space-y-3">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-3 rounded-md transition-all ${
                    notification.isNew ? 'bg-red-50' : 'bg-gray-50'
                  } border border-gray-200`}
                >
                  <p className="text-sm text-gray-700">{notification.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No new notifications.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
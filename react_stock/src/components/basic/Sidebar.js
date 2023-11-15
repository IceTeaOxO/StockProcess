// Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 w-1/4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li><a href="/dashboard" className="text-blue-500 hover:underline">Dashboard</a></li>
        <li><a href="/profile" className="text-blue-500 hover:underline">Profile</a></li>
        <li><a href="/settings" className="text-blue-500 hover:underline">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

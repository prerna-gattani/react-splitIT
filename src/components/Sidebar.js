import React from 'react';

const Sidebar = () => {
  return (
    // In Sidebar.js
<div className="w-64 bg-blue-600 text-white"> {/* Changed to blue */}
  <div className="p-6">
    <h1 className="text-2xl font-bold">Logo</h1> {/* Removed text color */}
  </div>
  <nav className="mt-6">
    <div className="px-6 py-3 bg-blue-700 font-medium">Dashboard</div> {/* Darker blue */}
    <div className="px-6 py-3 hover:bg-blue-700">Transaction</div>
    <div className="px-6 py-3 hover:bg-blue-700">Expenses</div>
    <div className="px-6 py-3 hover:bg-blue-700">Income</div>
    <div className="px-6 py-3 hover:bg-blue-700">Settings</div>
    <div className="px-6 py-3 hover:bg-blue-700">Help</div>
  </nav>
</div>
  );
};

export default Sidebar;
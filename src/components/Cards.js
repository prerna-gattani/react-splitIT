import React from 'react';

const Cards = () => {
  return (
    // In Cards.js
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500"> {/* Added blue accent */}
    <h3 className="text-gray-500 text-sm font-medium">Total Money</h3>
    <p className="text-2xl font-bold mt-2">Rp 20.000</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500"> {/* Green accent */}
    <h3 className="text-gray-500 text-sm font-medium">This Month's Income</h3>
    <p className="text-2xl font-bold mt-2">Rp 50.000</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500"> {/* Red accent */}
    <h3 className="text-gray-500 text-sm font-medium">Expenses this month</h3>
    <p className="text-2xl font-bold mt-2">Rp 10.000</p>
  </div>
</div>
  );
};

export default Cards;
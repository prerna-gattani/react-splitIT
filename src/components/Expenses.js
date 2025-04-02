import React from 'react';

const Expenses = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Description</h3>
        <button className="text-blue-600 text-sm">View Report</button>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Food & Drinks</span>
          <span className="font-medium">Rp 120.000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shopping</span>
          <span className="font-medium">Rp 80.000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Transportation</span>
          <span className="font-medium">Rp 45.000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Entertainment</span>
          <span className="font-medium">Rp 30.000</span>
        </div>
      </div>
      
      // In Expenses.js
<div className="mt-8">
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-600">Amount</span>
    <span className="font-medium">Rp 275.000</span>
  </div>
  <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
    Add Expense
  </button>
</div>
    </div>
  );
};

export default Expenses;
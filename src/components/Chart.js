import React from 'react';

const Chart = () => {
  // Sample data for the chart (in a real app, you would use a charting library)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Spending Report</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md font-medium">12 Months</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">3 months</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">30 days</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">7 days</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">24 Hours</button>
        </div>
      </div>
      
      {/* Year Report Section */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-500 mb-4">Year Report</h4>
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          {months.map((month, index) => (
            <span key={index}>{month}</span>
          ))}
        </div>
        <div className="h-48 bg-gray-100 rounded-md flex items-end">
          {/* Chart bars - in a real app you would use Chart.js or similar */}
          <div className="flex-1 flex items-end justify-between px-2 pb-2">
            <div className="w-3 h-3/5 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-4/5 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-full bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-2/5 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-1/3 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-1/2 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-3/4 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-2/3 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-1/2 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-3/5 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-4/5 bg-blue-500 rounded-t-sm"></div>
            <div className="w-3 h-1/3 bg-blue-500 rounded-t-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Earnings Section */}
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-4">Earnings</h4>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-500 text-sm">Income</p>
            <p className="text-xl font-bold text-gray-800">$ 20,000</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-500 text-sm">Qoicome</p>
            <p className="text-xl font-bold text-gray-800">$ 17,000</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">Upwork</span>
            <span className="text-sm font-medium text-gray-800">$ 3,000</span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Fresen</span>
            <span className="text-sm font-medium text-gray-800">$ 3,000</span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-600">Era</span>
            <span className="text-sm font-medium text-gray-800">$ 2.4</span>
          </div>
          <button className="text-blue-600 text-sm font-medium mb-2">See All</button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
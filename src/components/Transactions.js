import React from 'react';

const Transactions = () => {
  const transactions = [
    { 
      id: 'Spatity #7890328', 
      amount: '-Rp 18.000', 
      date: '16 Jan 23.0pm', 
      status: 'Completed' 
    },
    { 
      id: 'Starbucks #3948509', 
      amount: '-Rp 24.000', 
      date: '16 Jan 23.0pm', 
      status: 'Completed' 
    },
    { 
      id: 'Upwork #2930729', 
      amount: '+Rp 50.000', 
      date: '14 Jan 23.0pm', 
      status: 'Completed' 
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
        <button className="text-blue-600 text-sm font-medium">View Report</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.id}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Cards from './components/Cards';
import Chart from './components/Chart';
import Transactions from './components/Transactions';
import Expenses from './components/Expenses';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <div className="p-6">
          <Cards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <Chart />
              <Transactions />
            </div>
            <div className="lg:col-span-1">
              <Expenses />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
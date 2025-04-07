const Overview = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">TURNOVER</h3>
            <div className="bg-pink-200 p-2 rounded-full">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">$92,405</p>
          <p className="text-green-500 mt-1">+ 5.39% period of change</p>
        </div>
  
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">PROFIT</h3>
            <div className="bg-blue-200 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">$32,218</p>
          <p className="text-green-500 mt-1">+ 5.39% period of change</p>
        </div>
  
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">NEW CUSTOMER</h3>
            <div className="bg-blue-200 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">298</p>
          <p className="text-green-500 mt-1">+ 6.84% period of change</p>
        </div>
      </div>
    );
  };
  
  export default Overview;
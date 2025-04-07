import { useState, useEffect } from "react";
import axios from "axios";
const Overview = () => {
  const [overviewData, setOverviewData] = useState({
    turnover: 0,
    profit: 0,
    newCustomer: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await axios.get(
          "https://67f2bf95ec56ec1a36d4144f.mockapi.io/overview"
        );
        const data = response.data[0]; // Lấy phần tử đầu tiên từ mảng
        setOverviewData({
          turnover: data.turnover,
          profit: data.profit,
          newCustomer: data.newCustomer,
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch overview data");
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-pink-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">TURNOVER</h3>
          <div className="bg-pink-200 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-pink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              />
            </svg>
          </div>
        </div>
        <p className="text-3xl font-bold text-gray-800 mt-2">${overviewData.turnover.toLocaleString()}</p>
        <p className="text-green-500 mt-1">+ 5.39% period of change</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">PROFIT</h3>
          <div className="bg-blue-200 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              />
            </svg>
          </div>
        </div>
        <p className="text-3xl font-bold text-gray-800 mt-2">${overviewData.profit.toLocaleString()}</p>
        <p className="text-green-500 mt-1">+ 5.39% period of change</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">NEW CUSTOMER</h3>
          <div className="bg-blue-200 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              />
            </svg>
          </div>
        </div>
        <p className="text-3xl font-bold text-gray-800 mt-2">{overviewData.newCustomer}</p>
        <p className="text-green-500 mt-1">+ 6.84% period of change</p>
      </div>
    </div>
  );
};

export default Overview;

import { useState, useEffect } from "react";
import { FaTh } from "react-icons/fa";
import { IoCartOutline, IoLogoUsd } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoArrowUpOutline } from "react-icons/io5";
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
        const data = response.data[0];
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
    <div>
      <div className="flex items-center pl-5">
        <FaTh className="mr-2 text-pink-600" />
        <h1 className="text-2xl font-bold text-black">Overview</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        <div className="bg-pink-50 p-6 rounded-lg ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-black font-bold">Turnover</h3>
            <div className="bg-pink-100 p-2 rounded  border-2 border-pink-200">
              <IoCartOutline className="text-2xl" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            ${overviewData.turnover.toLocaleString()}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-500 "></div>
            <span className="text-green-500 pl-1">5.39%</span>
            <span className="text-gray-500 text-sm">period of change</span>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-black font-bold">Profit</h3>
            <div className="bg-pink-100 p-2 rounded border-2 border-blue-200">
              <IoLogoUsd className="text-2xl text-blue-400 " />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            ${overviewData.profit.toLocaleString()}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-500 "></div>
            <span className="text-green-500 pl-1">5.39%</span>
            <span className="text-gray-500 text-sm">period of change</span>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-black font-bold">New customers</h3>
            <div className="bg-pink-100 p-2 rounded border-2 border-blue-200">
              <RxAvatar className="text-2xl text-blue-300" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            {overviewData.newCustomer}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-500 "></div>
            <span className="text-green-500 pl-1">6.84%</span>
            <span className="text-gray-500 text-sm">period of change</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

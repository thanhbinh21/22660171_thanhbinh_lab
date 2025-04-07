import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowDown, FaArrowUp, FaEdit } from 'react-icons/fa';

const DataTable = () => {

  // const data = [
  //   { id: 1, customerName: "Elizabeth Lee", company: "AvatarSystems", orderValue: 359, orderDate: "10/07/2023", status: "New" },
  //   { id: 2, customerName: "Carlos Garcia", company: "SnoozeShift", orderValue: 747, orderDate: "24/07/2023", status: "New" },
  //   { id: 3, customerName: "Elizabeth Bailey", company: "Prime Time Telecom", orderValue: 564, orderDate: "08/08/2023", status: "In-progress" },
  //   { id: 4, customerName: "Ryan Brown", company: "OmniTech Corporation", orderValue: 541, orderDate: "31/08/2023", status: "In-progress" },
  //   { id: 5, customerName: "Ryan Young", company: "DataStream Inc.", orderValue: 769, orderDate: "01/05/2023", status: "Completed" },
  //   { id: 6, customerName: "Hailey Adams", company: "FlowRush", orderValue: 922, orderDate: "10/06/2023", status: "Completed" },
  // ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://67f2bf95ec56ec1a36d4144f.mockapi.io/customers');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; 
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((row) => row.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedRows([]); 
    setSelectAll(false);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6h6v6m-6 0h6m-3-9V3m-9 9h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">DETAILED REPORT</h2>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-3 py-1.5 bg-pink-500 text-white rounded-lg text-sm">
            <FaArrowDown className="mr-1" />
            Import
          </button>
          <button className="flex items-center px-3 py-1.5 bg-pink-500 text-white rounded-lg text-sm">
            <FaArrowUp className="mr-1" />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-xs uppercase">
              <th className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Company</th>
              <th className="p-4">Order Value</th>
              <th className="p-4">Order Date</th>
              <th className="p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr key={row.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </td>
                <td className="p-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span className="text-gray-800">{row.customerName}</span>
                </td>
                <td className="p-4 text-gray-600">{row.company}</td>
                <td className="p-4 text-gray-800">${row.orderValue}</td>
                <td className="p-4 text-gray-600">{row.orderDate}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      row.status === "New"
                        ? "bg-blue-100 text-blue-600"
                        : row.status === "In-progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <button>
                    <FaEdit className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">{data.length} results</p>
        <div className="flex space-x-2">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-full text-sm ${
                currentPage === page
                  ? "bg-pink-500 text-white"
                  : "border border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaArrowDown,
  FaArrowUp,
  FaEdit,
  FaChevronLeft,
  FaChevronRight,
  FaPen,
} from "react-icons/fa";

import { IoDocumentTextOutline } from "react-icons/io5";
import Avatar1 from "../assets/Lab_05/Avatar (1).png";
import Avatar2 from "../assets/Lab_05/Avatar (2).png";
import Avatar3 from "../assets/Lab_05/Avatar (3).png";
import Avatar4 from "../assets/Lab_05/Avatar (4).png";
import Avatar5 from "../assets/Lab_05/Avatar (5).png";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("edit"); 
  const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
  });
  const [modalError, setModalError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67f2bf95ec56ec1a36d4144f.mockapi.io/customers"
        );
        setData(response.data);
        console.log("Danh sách khách hàng:", response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

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

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedRows([]);
      setSelectAll(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSelectedRows([]);
      setSelectAll(false);
    }
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 3;
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPage <= 4) {
      for (let i = 1; i <= maxPagesToShow; i++) {
        pages.push(i);
      }
      pages.push("...");
      for (let i = totalPages - 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage >= totalPages - 3) {
      for (let i = 1; i <= 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
      for (let i = totalPages - 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const handleEditClick = async (id) => {
    try {
      const response = await axios.get(
        `https://67f2bf95ec56ec1a36d4144f.mockapi.io/customers/${String(id)}`
      );
      setEditData(response.data);
      setFormData({
        customerName: response.data.customerName,
        company: response.data.company,
        orderValue: response.data.orderValue,
        orderDate: response.data.orderDate,
        status: response.data.status,
      });
      setModalError(null);
      setModalMode("edit");
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setModalError(
          `Customer with ID ${id} not found. Please check the ID and try again.`
        );
      } else {
        setModalError("Failed to fetch customer data. Please try again.");
      }
      console.error("Failed to fetch customer data:", err);
    }
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setEditData(null);
    setFormData({
      customerName: "",
      company: "",
      orderValue: "",
      orderDate: "",
      status: "New",
    });
    setModalError(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (modalMode === "edit") {
      if (!editData) {
        setModalError("No customer data to update.");
        return;
      }

      try {
        const response = await axios.put(
          `https://67f2bf95ec56ec1a36d4144f.mockapi.io/customers/${String(
            editData.id
          )}`,
          formData
        );
        setData((prevData) =>
          prevData.map((item) =>
            item.id === editData.id ? response.data : item
          )
        );
        setIsModalOpen(false);
      } catch (err) {
        setModalError("Failed to update customer data. Please try again.");
        console.error("Failed to update customer data:", err);
      }
    } else {
      try {
        const response = await axios.post(
          "https://67f2bf95ec56ec1a36d4144f.mockapi.io/customers",
          formData
        );
        setData((prevData) => [response.data, ...prevData]);
        setIsModalOpen(false);
      } catch (err) {
        setModalError("Failed to add new customer. Please try again.");
        console.error("Failed to add new customer:", err);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData(null);
    setFormData({
      customerName: "",
      company: "",
      orderValue: "",
      orderDate: "",
      status: "",
    });
    setModalError(null);
    setModalMode("edit"); // Reset về chế độ mặc định
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const avatarImages = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

  return (
    <div className="bg-white shadow-md px-5 pb-5 ">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <IoDocumentTextOutline className="mr-2 text-pink-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">Detailed report</h2>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAddClick}
            className="flex items-center px-3 py-1.5 border-2 border-pink-400 bg-white  text-pink-500 rounded-lg text-sm hover:cursor-pointer"
          >
            <FaArrowDown className="mr-1" />
            Import
          </button>
          <button className="flex items-center px-3 py-1.5 border-2 border-pink-400 bg-white  text-pink-500 rounded-lg text-sm hover:cursor-pointer">
            <FaArrowUp className="mr-1" />
            Export
          </button>
        </div>
      </div>

      <div className=" bg-pink-50 overflow-x-auto p-5 border border-gray-300 rounded-xl">
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
              <th className="p-4 text-[15px] ">Customer Name</th>
              <th className="p-4 text-[15px]">Company</th>
              <th className="p-4 text-[15px]">Order Value</th>
              <th className="p-4 text-[15px]">Order Date</th>
              <th className="p-4 text-[15px]">Status</th>
              <th className="p-4 text-[15px]"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </td>
                <td className="p-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3">
                    <img
                      src={
                        avatarImages[
                          Math.floor(Math.random() * avatarImages.length)
                        ]
                      }
                      alt="avatar"
                      className="w-8 h-8 rounded-full mr-3 object-cover"
                    />
                  </div>
                  <span className="text-gray-800 font-bold">
                    {row.customerName}
                  </span>
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
                  <button onClick={() => handleEditClick(row.id)}>
                    <FaPen  className="w-4 h-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer" />
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
          {/* Nút Previous */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-full text-sm ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Số trang */}
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              className={`px-3 py-1 rounded-full text-sm ${
                page === currentPage
                  ? "bg-pink-500 text-white"
                  : typeof page === "number"
                  ? "border border-gray-300 text-gray-600 hover:bg-gray-100"
                  : "text-gray-600 cursor-default"
              }`}
              disabled={typeof page !== "number"}
            >
              {page}
            </button>
          ))}

          {/* Nút Next */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-full text-sm ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Modal (dùng chung cho Edit và Add) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">
              {modalMode === "edit" ? "Edit Customer" : "Add New Customer"}
            </h3>
            {modalError && (
              <div className="mb-4 p-2 bg-red-100 text-red-600 rounded-lg">
                {modalError}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Order Value
                </label>
                <input
                  type="number"
                  name="orderValue"
                  value={formData.orderValue}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Order Date
                </label>
                <input
                  type="text"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                  {modalMode === "edit" ? "Save" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;

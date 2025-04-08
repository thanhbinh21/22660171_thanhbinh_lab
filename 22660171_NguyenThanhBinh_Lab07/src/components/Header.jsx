import { FaSearch, FaBell, FaQuestion } from 'react-icons/fa';
import Avatar from "../assets/Lab_05/Avatar 313.png";

const Header = ({ title }) => {
  return (
    <div className="sticky top-0 z-40 w-full">
      <header className="bg-white p-4 flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-bold text-pink-600">{title}</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <FaBell className="text-gray-600" />
          <FaQuestion className="text-gray-600" />
          <img src={Avatar} alt="User avatar" />
        </div>
      </header>
    </div>
  );
};

export default Header;
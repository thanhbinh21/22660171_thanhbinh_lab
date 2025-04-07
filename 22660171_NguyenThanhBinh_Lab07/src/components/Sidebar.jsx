// src/components/Sidebar.js
import { NavLink } from 'react-router-dom';
import { FaTh, FaFolder, FaUsers, FaChartBar, FaEnvelope, FaPlug } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-pink-500">LOGO</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center p-4 bg-pink-500 text-white'
                  : 'flex items-center p-4 text-gray-600 hover:bg-gray-100'
              }
            >
              <FaTh className="mr-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center p-4 bg-pink-500 text-white'
                  : 'flex items-center p-4 text-gray-600 hover:bg-gray-100'
              }
            >
              <FaFolder className="mr-3" />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center p-4 bg-pink-500 text-white'
                  : 'flex items-center p-4 text-gray-600 hover:bg-gray-100'
              }
            >
              <FaUsers className="mr-3" />
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center p-4 bg-pink-500 text-white'
                  : 'flex items-center p-4 text-gray-600 hover:bg-gray-100'
              }
            >
              <FaChartBar className="mr-3" />
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center p-4 bg-pink-500 text-white'
                  : 'flex items-center p-4 text-gray-600 hover:bg-gray-100'
              }
            >
              <FaEnvelope className="mr-3" />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrations"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center p-4 bg-pink-500 text-white'
                  : 'flex items-center p-4 text-gray-600 hover:bg-gray-100'
              }
            >
              <FaPlug className="mr-3" />
              Integrations
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Advertisement */}
      <div className="p-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="h-32 bg-gray-200 mb-4 rounded-lg">
            <p className="text-gray-500">Illustration Placeholder</p>
          </div>
          <h3 className="text-lg font-semibold">V2.0 IS AVAILABLE</h3>
          <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
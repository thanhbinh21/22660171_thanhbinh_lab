import { NavLink } from 'react-router-dom';
import { FaTh, FaFolder, FaUsers, FaChartBar, FaEnvelope, FaPlug } from 'react-icons/fa';
import { IoCode } from "react-icons/io5";

import Logo from "../assets/Lab_05/Image 1858.png"
import Group from "../assets/Lab_05/Group.png"
import Dashboard from "../assets/Lab_05/Squares four 1.png"
import Projects from '../assets/Lab_05/Folder.png';
import Teams from '../assets/Lab_05/Groups.png';
import Analytics from '../assets/Lab_05/Pie chart.png';
import Messages from '../assets/Lab_05/Chat.png';
import Integrations from '../assets/Lab_05/Code.png';




const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col ml-2  rounded border  border-gray-300 sticky top-0 left-0z-40 ">
      {/* Logo */}
      <div className="p-3">
        <h1 className="text-2xl font-bold text-pink-500">
          <img src={Logo} alt="" className='object-cover' />
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center p-4  bg-pink-500 text-white rounded'
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
                  ? 'flex items-center p-4  bg-pink-500 text-white rounded'
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
                  ? 'flex items-center p-4  bg-pink-500 text-white rounded'
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
                  ? 'flex items-center p-4  bg-pink-500 text-white rounded'
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
                  ? 'flex items-center p-4  bg-pink-500 text-white rounded '
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
                  ? 'flex items-center p-4  bg-pink-500 text-white rounded'
                  : 'flex items-center p-4 text-gray-600 hover:bg-gray-100'
              }
            >
              <IoCode className="mr-3" />
              Integrations
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Advertisement */}
      <div className="p-3">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className=" mb-4 rounded-lg flex justify-center items-center">
            <img src={Group} alt="" className='object-cover w-35' />
          </div>
          <h3 className="text-md font-semibold">V2.0 IS AVAILABLE</h3>
          <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
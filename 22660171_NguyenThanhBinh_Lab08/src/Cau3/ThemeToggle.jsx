import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className='font-bold'>CÂU 3 - Theme Toggle</h1>
      <p>Hiện tại: {theme}</p>
      <button className="mt-2 px-4 py-1 bg-indigo-500 text-white" onClick={() => dispatch(toggleTheme())}>
        Đổi theme
      </button>
    </div>
  );
};

export default ThemeToggle;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [notification, setNotification] = useState('');
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(username));
    setNotification(`Đăng nhập thành công : ${username}`);
    setTimeout(() => {
      setNotification('');
    }, 1000);
  };

  const handleLogout = () => {
    dispatch(logout());
   
  };

  return (
    <div>
      <h1 className='font-bold'>CÂU 5 - Auth</h1>
      {notification && <div className="bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 w-[200px]" role="alert">
        <strong className="font-bold">Thành công!</strong>
        <span className="block sm:inline">{notification}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg onClick={() => setNotification('')} className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path fillRule="evenodd" d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.586l-2.651 3.263a1.2 1.2 0 0 1-1.697-1.697L8.303 10l-3.263-2.651a1.2 1.2 0 0 1 1.697-1.697L10 8.414l2.651-3.263a1.2 1.2 0 0 1 1.697 1.697L11.697 10l3.263 2.651a1.2 1.2 0 0 1 0 1.697z"/></svg>
        </span>
      </div>}
      {!isLoggedIn ? (
        <div className="flex gap-2">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-1"
            placeholder="Nhập tên người dùng"
          />
          <button className="bg-green-500 px-2 text-white rounded" onClick={handleLogin}>
            Đăng nhập
          </button>
        </div>
      ) : (
        <div>
          <p>Chào {user}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-2 rounded">Đăng xuất</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
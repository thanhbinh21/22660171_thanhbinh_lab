import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='font-bold'>CÂU 1 - Counter APP</h1>
      <div className="text-6xl font-semibold mb-6">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-500 text-black   hover:bg-red-600 transition"
        >
          Giảm
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-green-500 text-black hover:bg-green-600 transition"
        >
          Tăng
        </button>
      </div>
    </div>
  );
};

export default Counter;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/todoSlice';

const Todo = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className='font-bold'>CÂU 2 - Todo List</h1>
      <div className="flex gap-2 my-2">
        <input
          className="border p-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-2" onClick={() => {
          dispatch(addTodo(text));
          setText('');
        }}>Thêm</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center my-1">
            <span
              className={todo.completed ? 'line-through' : ''}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button className="text-red-500" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

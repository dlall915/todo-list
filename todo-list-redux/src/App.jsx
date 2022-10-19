import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from './reducers/todosSlice';
import './css/App.css';
// import data from './assets/data.json';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export default function App() {
  const URL = 'https://jsonplaceholder.typicode.com/todos';

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => dispatch(setTodos(data.slice(0, 10))));
  }, []);

  return (
    <div className="App">
      <TodoList />
      <TodoAdd />
    </div>
  );
}

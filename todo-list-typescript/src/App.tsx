import React, { useState, useEffect } from 'react'
import './css/App.css'

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

interface Item {
  id: number,
  title: string,
  completed: boolean,
}

export default function App() {
  const URL = 'https://jsonplaceholder.typicode.com/todos';
  const [list, setList] = useState<Array<Item>>([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setList(data.slice(0, 10)));
  }, []);

  const handleClick = (id: number) => {
    const modifiedList: Array<Item> = list.map((item: Item) => (item.id === id
      ? { ...item, completed: !item.completed } : { ...item }));

    setList(modifiedList);
  };

  const addTodo = (title: string) => {
    const newItem: Item = {
      id: list[list.length - 1].id + 1,
      title,
      completed: false,
    };

    setList([...list, newItem]);
  };

  const removeTodo = (id: number) => {
    const modifiedList = list.filter((item) => item.id !== id);

    setList(modifiedList);
  };

  return (
    <div className="App">
      <TodoList list={list} handleClick={handleClick} handleRemove={removeTodo} />
      <TodoAdd addTodo={addTodo} />
    </div>
  )
}

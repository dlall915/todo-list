import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './Todo';

export default function TodoList() {
  const list = useSelector((state) => state.todos.list);

  return (
    <div className="todo-list">
      {
        list.map((listItem) => <TodoItem key={listItem.id} listItem={listItem} />)
      }
    </div>
  );
}

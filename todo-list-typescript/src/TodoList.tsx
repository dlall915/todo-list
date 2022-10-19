import React from 'react';

import TodoItem from './Todo';

interface Item {
  id: number,
  title: string,
  completed: boolean,
}

interface Props {
  list: Array<Item>,
  handleClick: Function,
  handleRemove: Function,
}

export default function TodoList({ list, handleClick, handleRemove }: Props) {
  return (
    <div className="todo-list">
      {
        list.map((listItem: Item) => <TodoItem key={listItem.id} listItem={listItem} handleClick={handleClick} handleRemove={handleRemove} />)
      }
    </div>
  );
}

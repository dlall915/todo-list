import React from 'react';

interface Item {
  id: number,
  title: string,
  completed: boolean,
}

interface Props {
  listItem: Item,
  handleClick: Function,
  handleRemove: Function,
}

export default function TodoItem({ listItem, handleClick, handleRemove }: Props) {
  return (
    <div>
      <button type="button" onClick={() => handleRemove(listItem.id)}>X</button>
      <span className={listItem.completed ? 'strike' : ''} onClick={() => handleClick(listItem.id)}>{listItem.title}</span>
    </div>
  );
}
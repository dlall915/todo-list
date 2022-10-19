import React, { SyntheticEvent } from 'react';

interface Props {
  addTodo: Function,
}

export default function TodoAdd({ addTodo }: Props) {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    addTodo((document.getElementById('toDoTask') as HTMLInputElement).value);
    (document.getElementById('toDoTask') as HTMLInputElement).value = '';
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="textbox" id="toDoTask" />
      <button type="submit">Add Task</button>
    </form>
  );
}

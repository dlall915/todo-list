import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducers/todosSlice';

export default function TodoAdd() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(document.getElementById('toDoTask').value));
    document.getElementById('toDoTask').value = '';
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="textbox" id="toDoTask" />
      <button type="submit">Add Task</button>
    </form>
  );
}

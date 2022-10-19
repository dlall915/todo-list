import React from 'react';
import PropTypes from 'prop-types';

export default function TodoAdd({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(document.getElementById('toDoTask').value);
    document.getElementById('toDoTask').value = '';
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="textbox" id="toDoTask" />
      <button type="submit">Add Task</button>
    </form>
  );
}

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

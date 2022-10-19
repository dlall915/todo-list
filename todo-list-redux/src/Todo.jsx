import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from './reducers/todosSlice';

export default function TodoItem({ listItem }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(removeTodo(listItem.id))}>X</button>
      <span className={listItem.completed ? 'strike' : ''} onClick={() => dispatch(toggleTodo(listItem.id))}>{listItem.title}</span>
    </div>
  );
}

TodoItem.propTypes = {
  listItem: PropTypes.array.isRequired,
};

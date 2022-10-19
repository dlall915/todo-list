import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './Todo';

export default function TodoList({
  list,
  handleClick,
  handleRemove,
}) {
  return (
    <div className="todo-list">
      {
        list.map((listItem) => <TodoItem key={listItem.id} listItem={listItem} handleClick={handleClick} handleRemove={handleRemove} />)
      }
    </div>
  );
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

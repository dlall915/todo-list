import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({
  listItem,
  handleClick,
  handleRemove,
}) {
  return (
    <div>
      <button type="button" onClick={() => handleRemove(listItem.id)}>X</button>
      <span className={listItem.completed ? 'strike' : ''} onClick={() => handleClick(listItem.id)}>{listItem.title}</span>
    </div>
  );
}

TodoItem.propTypes = {
  listItem: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

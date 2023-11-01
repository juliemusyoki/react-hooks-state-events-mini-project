import React from 'react';

function Task({ task, onDeleteTask }) {
  return (
    <div className="task">
      <div className="task-text">{task.text}</div>
      <div className="task-category">{task.category}</div>
      <button onClick={onDeleteTask} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default Task;

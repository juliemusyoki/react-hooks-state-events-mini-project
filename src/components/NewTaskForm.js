import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(text, category);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <input
        type="text"
        placeholder="Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
}

export default NewTaskForm;

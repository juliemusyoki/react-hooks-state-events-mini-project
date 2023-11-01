import React, { useState } from 'react';
import '../index.css'; 
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import { CATEGORIES, TASKS } from '../data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addTask = (text, category) => {
    const newTask = { text, category };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
  };

  const filterTasks = selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="container">
      <h2>Task List</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <TaskList tasks={filterTasks} onDeleteTask={deleteTask} />
      <NewTaskForm categories={CATEGORIES.slice(1)} onTaskFormSubmit={addTask} />
    </div>
  );
}

export default App;

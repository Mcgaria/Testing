import { useState } from 'react';

const AddTodos = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleKeyUp = (e) => {
    if (e.keyCode === 13 && task.trim().length !== 0) {
      addTask(task);
      setTask('');
    } else if (e.keyCode === 13 && task.trim().length === 0) {
      alert('Please enter a task');
    }
  };
  return (
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add A Task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        autoFocus
        onKeyUp={handleKeyUp}
      />
      <button
        className="todo-button"
        onClick={() => {
          if (task.trim().length === 0) {
            alert('Please enter a task');
          }
          if (task) {
            addTask(task);
            setTask('');
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodos;

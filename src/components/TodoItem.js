import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const TodoItem = ({ toggleTask, task, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked);
  // (props.task.checked);
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);

    // props.onChange();
  };
  return (
    <div>
      <li className="todo-item">
        <input
          className="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheckboxChange(task.id)}
          // onChange={() => handleCheckboxChange(task.id)}

          // onChange={props.onChange}
        />
        {task.name}
        {/* {props.task.name} */}
        <button
          onClick={() => {
            deleteTask(task.id);
            // props.onClick();
          }}
        >
          <TrashIcon className="delete-btn" />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;

import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTask, deleteTask }) => {
  return (
    <div className="container">
      <h2>Todo</h2>
      <span className="todo-countbox">{todos.length}</span>
      <ul className="todo-list">
        {todos
          .filter((task) => !task.checked)
          .map((task) => (
            // .filter((task) => task.checked)
            <TodoItem
              key={task.id}
              task={task}
              onChange={() => toggleTask(task.id)}
              deleteTask={() => deleteTask(task.id)}
            />
            // onChange={() => toggleTask(task.id)}
            // onClick={() => deleteTask(task.id)}
          ))}
      </ul>
    </div>
  );
};

export default TodoList;

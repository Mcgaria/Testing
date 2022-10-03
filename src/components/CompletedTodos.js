import TodoItem from './TodoItem';

const CompletedTodos = ({ todos, toggleTask, deleteTask }) => {
  return (
    <>
      <h2>Completed Todo</h2>{' '}
      <ul className="completed-todo">
        {todos.map((task) =>
          task.checked ? (
            <TodoItem
              key={task.id}
              todo={task}
              onChange={() => toggleTask(task.id)}
              deleteTask={() => deleteTask(task.id)}
            />
          ) : // onChange={() => toggleTask(task.id)}
          // onClick={() => deleteTask(task.id)}
          null
        )}
      </ul>
    </>
  );
};

export default CompletedTodos;

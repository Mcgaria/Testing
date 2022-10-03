import { useState } from 'react';

import AddTodos from './AddTodos';
import TodoList from './TodoList';
import CompletedTodos from './CompletedTodos';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), name: task, checked: false },
    ]);
  };

  const toggleTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((task) => {
        if (task.id === id) {
          return [
            ...prevTodos.filter((item) => item.id !== id),
            { ...task, checked: !task.checked },
          ];
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    const updatedTodos = [...todos].filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  // const handleTodoToggle = (id) => {
  //   setTodos((previousTodos) => {
  //     const currentTodoItem = previousTodos.map(
  //       (prevTodo) => prevTodo.id === id
  //     );
  //     return [
  //       ...previousTodos.filter((item) => item.id !== id),
  //       {
  //         ...currentTodoItem,
  //         checked: !currentTodoItem.checked,
  //       },
  //     ];
  //   });
  // };
  return (
    <>
      <AddTodos addTask={addTask} />
      {todos && (
        <TodoList
          todos={todos}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
      {todos && (
        <CompletedTodos
          todos={todos}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      )}
    </>
  );
};

export default Todos;

//   {
//     id: todos.length +1,
//     text: 'Watch Rings Of Power',
//     checked: true,
//   },
//   {
//     id: todos.length +1,
//     text: 'Watch House of Dragons',
//     checked: false,
//   },
// ]);

//       prevTodos.map((t) =>
//       (t.id === id ? { ...t, checked: !t.checked } : t))
//     );
//   return [
//     prevTodos.filter((task) => task.id !== id),
//     { ...currentTodoItem, checked: !currentTodoItem.checked },
//   ];
// };

// const toggleTask = (id) => {
//   setTodos((previousTodos) => {
//     const currentTodoItem = previousTodos.map(
//       (prevTodo) => prevTodo.id === id
//     );
//     return [
//       ...previousTodos.filter((item) => item.id !== id),
//       {
//         ...currentTodoItem,
//         checked: !currentTodoItem.checked,
//       },
//     ];
//   });
// };

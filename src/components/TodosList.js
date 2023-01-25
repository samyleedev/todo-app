import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { removeAllTodos } from "../redux/slices/todos/todos.slice";
const TodosList = () => {
  const allTodos = useSelector((state) => state.todos.todosList);
  const todosView = useSelector((state) => state.todos.todosView);
  const completedTodos = allTodos.filter((todo) => todo.completed === true);
  const activeTodos = allTodos.filter((todo) => todo.completed === false);

  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      {todosView === "all" && (
        <>
          {allTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </>
      )}
      {todosView === "completed" && (
        <>
          {completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          {completedTodos.length > 0 && (
            <button
              onClick={() => dispatch(removeAllTodos())}
              className="p-3 text-white bg-red-600 rounded"
            >
              Tout supprimer
            </button>
          )}
        </>
      )}
      {todosView === "active" && (
        <>
          {activeTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </div>
  );
};

export default TodosList;

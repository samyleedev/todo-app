import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { removeAllTodos } from "../redux/slices/todos/todos.slice";
const TodosList = () => {
  const allTodos = useSelector((state) => state.todos.todosList);
  const todosFilter = useSelector((state) => state.todos.todosFilter);
  const completedTodos = allTodos.filter((todo) => todo.completed === true);
  const activeTodos = allTodos.filter((todo) => todo.completed === false);

  const dispatch = useDispatch();

  return (
    <div className="mt-5 flex flex-col h-full overflow-y-scroll">
      {todosFilter === "all" && (
        <>
          {allTodos.length === 0 ? (
            <p className="text-white">Vous n'avez aucune tâche à afficher.</p>
          ) : (
            allTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </>
      )}
      {todosFilter === "completed" && (
        <>
          {completedTodos.length === 0 ? (
            <p className="text-white">Vous n'avez aucune tâche terminée</p>
          ) : (
            <>
              {completedTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
              {completedTodos.length > 0 && (
                <button
                  onClick={() => dispatch(removeAllTodos())}
                  className="p-3 text-white bg-red-600 rounded w-fit place-self-end"
                >
                  Tout supprimer
                </button>
              )}
            </>
          )}
        </>
      )}
      {todosFilter === "active" && (
        <>
          {activeTodos.length === 0 ? (
            <p className="text-white">Vous n'avez aucune tâche à faire.</p>
          ) : (
            activeTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </>
      )}
    </div>
  );
};

export default TodosList;

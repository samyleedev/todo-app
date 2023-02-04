import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import {
  setTodosSortBy,
  toggleTodosSortOrder,
  removeAllTodos,
  selectTodosFilteredAndSorted,
} from "../redux/slices/todos/todos.slice";
const TodosList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.todosFilter);
  const todoList = useSelector(selectTodosFilteredAndSorted);

  return (
    <div className="mt-5 flex flex-col h-full overflow-y-scroll">
      <div className="flex text-white justify-between">
        {" "}
        <div
          className="flex-1 text-center bg-slate-500 cursor-pointer hover:bg-slate-400"
          onClick={() => {
            dispatch(setTodosSortBy("taskName"));
            dispatch(toggleTodosSortOrder());
          }}
        >
          Tâche
        </div>
        <div
          className="flex-1 text-center bg-slate-500 cursor-pointer  hover:bg-slate-400"
          onClick={() => {
            dispatch(setTodosSortBy("importance"));
            dispatch(toggleTodosSortOrder());
          }}
        >
          Importance
        </div>
        <div
          className="flex-1 text-center bg-slate-500 cursor-pointer  hover:bg-slate-400"
          onClick={() => {
            dispatch(setTodosSortBy("urgency"));
            dispatch(toggleTodosSortOrder());
          }}
        >
          Urgence
        </div>
      </div>

      {todoList.length === 0 && (
        <p className="text-white">Vous n'avez aucune tâche à afficher.</p>
      )}

      {todoList.length > 0 &&
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}

      {todoList.length > 0 && filter === "completed" && (
        <div
          className="p-2 rounded bg-red-500 text-white w-fit self-end mt-5 cursor-pointer"
          onClick={() => dispatch(removeAllTodos())}
        >
          Supprimer tout
        </div>
      )}
    </div>
  );
};

export default TodosList;

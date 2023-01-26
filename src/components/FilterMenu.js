import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayTodosFilter } from "../redux/slices/todos/todos.slice";

const FilterMenu = () => {
  const todosFilter = useSelector((state) => state.todos.todosFilter);
  const dispatch = useDispatch();
  return (
    <div className="text-white flex justify-between">
      <button
        className={`text-center w-1/3 ${
          todosFilter === "all" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosFilter("all"))}
      >
        Toutes
      </button>
      <button
        className={`text-center w-1/3 ${
          todosFilter === "active" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosFilter("active"))}
      >
        À faire
      </button>
      <button
        className={`text-center w-1/3 ${
          todosFilter === "completed" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosFilter("completed"))}
      >
        Terminées
      </button>
    </div>
  );
};

export default FilterMenu;

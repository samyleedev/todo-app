import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayTodosView } from "../redux/slices/todos/todos.slice";

const FilterMenu = () => {
  const todosView = useSelector((state) => state.todos.todosView);
  const dispatch = useDispatch();
  return (
    <div className="text-white flex justify-between">
      <button
        className={`text-center w-1/3 ${
          todosView === "all" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosView("all"))}
      >
        Toutes
      </button>
      <button
        className={`text-center w-1/3 ${
          todosView === "active" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosView("active"))}
      >
        À faire
      </button>
      <button
        className={`text-center w-1/3 ${
          todosView === "completed" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosView("completed"))}
      >
        Terminées
      </button>
    </div>
  );
};

export default FilterMenu;

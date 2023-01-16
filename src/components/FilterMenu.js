import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayTodosView } from "../redux/slices/todos/todos.slice";

const FilterMenu = () => {
  const todosView = useSelector((state) => state.todos.todosView);
  const dispatch = useDispatch();
  return (
    <div className="text-white p-2">
      <button
        className={`p-2 ${
          todosView === "all" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosView("all"))}
      >
        All
      </button>
      <button
        className={`p-2 ${
          todosView === "active" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosView("active"))}
      >
        Active
      </button>
      <button
        className={`p-2 ${
          todosView === "completed" && "border-b-4 border-b-green-500"
        }`}
        onClick={() => dispatch(displayTodosView("completed"))}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterMenu;

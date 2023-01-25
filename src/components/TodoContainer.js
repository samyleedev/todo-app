import React from "react";
import FilterMenu from "./FilterMenu";
import AddTodoInput from "./AddTodoInput";
import TodosList from "./TodosList";

const TodoContainer = () => {
  return (
    <div className="w-1/3 p-4 bg-slate-900">
      <AddTodoInput />
      <FilterMenu />
      <TodosList />
    </div>
  );
};

export default TodoContainer;

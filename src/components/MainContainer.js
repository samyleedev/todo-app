import React from "react";
import FilterMenu from "./FilterMenu";
import AddTodoInput from "./AddTodoInput";
import TodosList from "./TodosList";

const MainContainer = () => {
  return (
    <div className="w-1/2">
      <FilterMenu />
      <AddTodoInput />
      <TodosList />
    </div>
  );
};

export default MainContainer;

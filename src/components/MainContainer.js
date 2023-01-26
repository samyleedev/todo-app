import React from "react";
import Matrix from "./Matrix";
import FilterMenu from "./FilterMenu";
import TodosList from "./TodosList";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const appView = useSelector((state) => state.todos.appView);

  return (
    <>
      {appView === "list" && (
        <div className="w-full p-10 overflow-hidden">
          <FilterMenu />
          <TodosList />
        </div>
      )}
      {appView === "matrix" && <Matrix />}
    </>
  );
};

export default MainContainer;

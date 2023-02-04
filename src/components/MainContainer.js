import React from "react";
import Matrix from "./Matrix";
import FilterMenu from "./FilterMenu";
import TodosList from "./TodosList";
import { useDispatch, useSelector } from "react-redux";
import { setAppView } from "../redux/slices/todos/todos.slice";
import { TbExchange } from "react-icons/tb";

const MainContainer = () => {
  const dispatch = useDispatch();
  const appView = useSelector((state) => state.todos.appView);
  const toggleView = () => {
    if (appView === "list") {
      dispatch(setAppView("matrix"));
    }
    if (appView === "matrix") {
      dispatch(setAppView("list"));
    }
  };

  return (
    <div className="w-full relative overflow-hidden ">
      <div
        onClick={() => toggleView()}
        className="bg-violet-700  rounded-full w-20 h-20 p-3 cursor-pointer absolute -left-7 -top-7"
      >
        <TbExchange className="text-4xl absolute text-white absolute right-3 bottom-3" />
      </div>
      {appView === "list" && (
        <div className="w-full p-10 overflow-hidden">
          <FilterMenu />
          <TodosList />
        </div>
      )}
      {appView === "matrix" && <Matrix />}
    </div>
  );
};

export default MainContainer;

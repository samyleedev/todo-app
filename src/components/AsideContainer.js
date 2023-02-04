import React from "react";
import AddTodoInput from "./AddTodoInput";

const AsideContainer = () => {
  return (
    <div className="md:w-1/3 p-2 md:p-4 bg-slate-900">
      <AddTodoInput />
    </div>
  );
};

export default AsideContainer;

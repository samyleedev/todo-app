import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOneTodo, toggleTodo } from "../redux/slices/todos/todos.slice";
import TodosList from "./TodosList";
import FilterMenu from "./FilterMenu";

const Matrix = () => {
  const todos = useSelector((state) => state.todos.todosList);
  const appView = useSelector((state) => state.todos.appView);
  const dispatch = useDispatch();
  const fixPosition = (rating) => {
    return 80 * rating - 12;
  };

  const handleRightClickDelete = (event, todoID) => {
    event.preventDefault();
    if (event.button === 2) {
      dispatch(removeOneTodo(todoID));
    }
  };

  const handleClickCompleted = (todoID) => {
    dispatch(toggleTodo(todoID));
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[800px] h-[800px] border-l-4 border-b-4 border-yellow-300 z-10 relative rounded">
        {todos.map((todo) => (
          <div
            style={{
              bottom: fixPosition(todo.importanceRating),
              left: fixPosition(todo.urgencyRating),
            }}
            title={`Tâche: ${todo.task}\nImportant: ${
              todo.importanceRating
            }/10\nUrgent: ${todo.urgencyRating}/10\n${
              todo.completed ? "Terminée" : "À faire"
            }`}
            key={todo.id}
            onContextMenu={(e) => handleRightClickDelete(e, todo.id)}
            onClick={() => handleClickCompleted(todo.id)}
            className={`w-6 h-6 rounded-xl border-2 hover:scale-125 border-yellow-500 ${
              todo.completed ? "bg-blue-600" : "bg-rose-600 "
            } cursor-pointer absolute z-10`}
          />
        ))}

        <div className="w-[400px] h-[400px]  absolute top-0 left-0 z-0 flex flex-col justify-center aligns-center border-b-4 border-r-4 border-green-600 border-dotted ">
          <p className="text-center font-bold text-xl text-white">
            À planifier
          </p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/preparation.png"
          />
        </div>
        <div className="w-[400px] h-[400px] absolute top-0 left-[400px] z-0 flex flex-col justify-center aligns-center border-b-4 border-green-600 border-dotted">
          <p className="text-center font-bold text-xl text-white">
            À traiter en priorité
          </p>

          <img
            className="h-1/2 w-auto p-5 blur-[2px]"
            src="../../images/blue-fire.png"
          />
        </div>
        <div className="w-[400px] h-[400px] absolute bottom-0 left-0 z-0 flex flex-col justify-center aligns-center border-r-4 border-green-600 border-dotted ">
          <p className="text-center font-bold text-xl text-white">
            À abandonner
          </p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/bin.png"
          />
        </div>
        <div className="w-[400px] h-[400px] absolute bottom-0 left-[400px] z-0 flex flex-col justify-center aligns-center">
          <p className="text-center font-bold text-xl text-white">À déléguer</p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/deleguate.png"
          />
        </div>
        <p className="text-white absolute -left-32">+ IMPORTANT</p>
        <p className="text-white absolute -left-32 bottom-0">- IMPORTANT</p>
        <p className="text-white absolute -bottom-14">- URGENT</p>
        <p className="text-white absolute -bottom-14 right-0">+ URGENT</p>
      </div>
    </div>
  );
};

export default Matrix;

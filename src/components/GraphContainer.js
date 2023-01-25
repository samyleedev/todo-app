import React from "react";
import { useSelector } from "react-redux";

const GraphContainer = () => {
  const todos = useSelector((state) => state.todos.todosList);

  const fixPosition = (rating) => {
    return 80 * rating - 12;
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-[800px] h-[800px] border-l-4 border-b-4 border-yellow-300 z-10 relative rounded overflow-hidden">
        {todos.map((todo) => (
          <div
            style={{
              bottom: fixPosition(todo.importanceRating),
              left: fixPosition(todo.urgencyRating),
            }}
            title={`Tâche: ${todo.task}\nImportant: ${todo.importanceRating}/10\nUrgent: ${todo.urgencyRating}/10`}
            key={todo.id}
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
      </div>
    </div>
  );
};

export default GraphContainer;

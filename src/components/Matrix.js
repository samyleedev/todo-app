import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOneTodo, toggleTodo } from "../redux/slices/todos/todos.slice";
import TodosList from "./TodosList";
import FilterMenu from "./FilterMenu";

const MOBILE_WIDTH = 300;
const SM_WIDTH = 500;
const MD_WIDTH = 600;
const LG_WIDTH = 700;
const XL_WIDTH = 800;

const Matrix = () => {
  const todos = useSelector((state) => state.todos.todosList);
  const appView = useSelector((state) => state.todos.appView);
  const dispatch = useDispatch();
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const fixPosition = (rating, screenWitdh) => {
    // let screenWitdh = window.innerWidth;
    let matrixWidth;

    //mobile
    if (screenWitdh < 640) {
      matrixWidth = MOBILE_WIDTH;
    }
    //sm
    else if (screenWitdh >= 640 && screenWitdh < 768) {
      matrixWidth = SM_WIDTH;
    }

    //md
    else if (screenWitdh >= 768 && screenWitdh < 1024) {
      matrixWidth = MD_WIDTH;
    }

    //lg
    else if (screenWitdh >= 1024 && screenWitdh < 1280) {
      matrixWidth = LG_WIDTH;
    }
    //xl
    else if (screenWitdh > 1280) {
      matrixWidth = XL_WIDTH;
    } else {
      console.log("default");
    }
    return (matrixWidth / 10) * rating - 12;
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
      <div
        className={`w-[${MOBILE_WIDTH}px] h-[${MOBILE_WIDTH}px] sm:w-[${SM_WIDTH}px] sm:h-[${SM_WIDTH}px] md:w-[${MD_WIDTH}px] md:h-[${MD_WIDTH}] lg:w-[${LG_WIDTH}px] lg:h-[${LG_WIDTH}px] xl:w-[${XL_WIDTH}px] xl:h-[${XL_WIDTH}px] border-l-4 border-b-4 border-yellow-300 z-10 relative rounded`}
      >
        {todos.map((todo) => (
          <div
            style={{
              bottom: fixPosition(todo.importanceRating, browserWidth),
              left: fixPosition(todo.urgencyRating, browserWidth),
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

        <div className="w-1/2 h-1/2  absolute top-0 left-0 z-0 flex flex-col justify-center aligns-center border-b-4 border-r-4 border-green-600 border-dotted ">
          <p className="text-center font-bold text-xl text-white">
            À planifier
          </p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/preparation.png"
          />
        </div>
        <div
          className={`w-1/2 h-1/2 absolute top-0 left-[${
            MOBILE_WIDTH / 2
          }px] sm:left-[${SM_WIDTH / 2}px] md:left-[${
            MD_WIDTH / 2
          }px] lg:left-[${LG_WIDTH / 2}px] xl:left-[${
            XL_WIDTH / 2
          }px] z-0 flex flex-col justify-center aligns-center border-b-4 border-green-600 border-dotted`}
        >
          <p className="text-center font-bold text-xl text-white">
            À traiter en priorité
          </p>

          <img
            className="h-1/2 w-auto p-5 blur-[2px]"
            src="../../images/blue-fire.png"
          />
        </div>
        <div className="w-1/2 h-1/2 absolute bottom-0 left-0 z-0 flex flex-col justify-center aligns-center border-r-4 border-green-600 border-dotted ">
          <p className="text-center font-bold text-xl text-white">
            À abandonner
          </p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/bin.png"
          />
        </div>
        <div
          className={`w-1/2 h-1/2 absolute bottom-0 left-[${
            MOBILE_WIDTH / 2
          }px] sm:left-[${SM_WIDTH / 2}px] md:left-[${
            MD_WIDTH / 2
          }px] lg:left-[${LG_WIDTH / 2}px] xl:left-[${
            XL_WIDTH / 2
          }px] z-0 flex flex-col justify-center aligns-center`}
        >
          <p className="text-center font-bold text-xl text-white">À déléguer</p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/deleguate.png"
          />
        </div>
        <p className="text-white  absolute -left-8 sm:max-2xl:-left-32 ">
          + IMPORTANT
        </p>
        <p className="text-white absolute -left-8 sm:max-2xl:-left-32 bottom-0">
          - IMPORTANT
        </p>
        <p className="text-white absolute -bottom-5 sm:max-2xl:-bottom-14">
          - URGENT
        </p>
        <p className="text-white absolute -bottom-5 sm:max-2xl:-bottom-14 right-0">
          + URGENT
        </p>
      </div>
    </div>
  );
};

export default Matrix;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOneTodo, toggleTodo } from "../redux/slices/todos/todos.slice";

const MOBILE_WIDTH = 300;
const SM_WIDTH = 500;
const MD_WIDTH = 600;
const LG_WIDTH = 700;
const XL_WIDTH = 800;

const WIDTH_VARIANTS = {
  mobile: "w-[300px] h-[300px]",
  sm: "sm:w-[500px] sm:h-[500px]",
  md: "md:w-[600px] md:h-[600px]",
  lg: "lg:w-[700px] lg:h-[700px]",
  xl: "xl:w-[800px] xl:h-[800px]",
};

const ABSOLUTE_LEFT_VARIANTS = {
  mobile: `left-[150px]`,
  sm: `sm:left-[250px]`,
  md: `md:left-[300px]`,
  lg: `lg:left-[350px]`,
  xl: `xl:left-[400px]`,
};

const Matrix = () => {
  const todos = useSelector((state) => state.todos.todosList);
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
      console.log("Error function 'fixPosition'");
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
    <div className="w-full min-h-[500px]  md:min-h-[800px] flex flex-col items-center justify-center">
      <div
        className={`${WIDTH_VARIANTS.mobile} ${WIDTH_VARIANTS.sm} ${WIDTH_VARIANTS.md} ${WIDTH_VARIANTS.lg} ${WIDTH_VARIANTS.xl} border-l-4 border-b-4 border-yellow-300 z-10 relative rounded`}
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
            className={`w-4 h-4 rounded-xl border-2 hover:scale-125 border-yellow-500 ${
              todo.completed ? "bg-blue-600" : "bg-rose-600 "
            } cursor-pointer absolute z-10`}
          >
            <div className="h-8 w-20 text-xs text-gray-300 font-bold text-center absolute top-5 -left-8 overflow-hidden truncate">
              {todo.task}
            </div>
          </div>
        ))}

        <div className="w-1/2 h-1/2  absolute top-0 left-0 z-0 flex flex-col justify-center aligns-center border-b-4 border-r-4 border-green-600 border-dotted ">
          <p className="text-center font-bold text-xl text-white">
            À planifier
          </p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/preparation.png"
            alt="Logo tâches à planifier"
          />
        </div>
        <div
          className={`w-1/2 h-1/2 absolute ${ABSOLUTE_LEFT_VARIANTS.mobile} ${ABSOLUTE_LEFT_VARIANTS.sm} ${ABSOLUTE_LEFT_VARIANTS.md}  ${ABSOLUTE_LEFT_VARIANTS.lg} ${ABSOLUTE_LEFT_VARIANTS.xl} top-0 z-0 flex flex-col justify-center aligns-center border-b-4 border-green-600 border-dotted`}
        >
          <p className="text-center font-bold text-xl text-white">
            À traiter en priorité
          </p>

          <img
            className="h-1/2 w-auto p-5 blur-[2px]"
            src="../../images/blue-fire.png"
            alt="Logo tâches à traiter en priorité"
          />
        </div>
        <div className="w-1/2 h-1/2 absolute bottom-0 left-0 z-0 flex flex-col justify-center aligns-center border-r-4 border-green-600 border-dotted ">
          <p className="text-center font-bold text-xl text-white">
            À abandonner
          </p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/bin.png"
            alt="Logo tâches à abandonner"
          />
        </div>
        <div
          className={`w-1/2 h-1/2 absolute ${ABSOLUTE_LEFT_VARIANTS.mobile} ${ABSOLUTE_LEFT_VARIANTS.sm} ${ABSOLUTE_LEFT_VARIANTS.md} ${ABSOLUTE_LEFT_VARIANTS.lg} ${ABSOLUTE_LEFT_VARIANTS.xl}  bottom-0  z-0 flex flex-col justify-center aligns-center`}
        >
          <p className="text-center font-bold text-xl text-white">À déléguer</p>

          <img
            className="flex justify-center h-1/2 p-5 blur-[2px]"
            src="../../images/deleguate.png"
            alt="Logo tâches à déléguer"
          />
        </div>
        <p className="text-white  absolute left-2 -top-2">+ IMPORTANT</p>
        <p className="text-white absolute left-2  bottom-0">- IMPORTANT</p>
        <p className="text-white absolute -bottom-7">- URGENT</p>
        <p className="text-white absolute -bottom-7 right-0">+ URGENT</p>
      </div>
    </div>
  );
};

export default Matrix;

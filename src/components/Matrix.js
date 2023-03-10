import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOneTodo, toggleTodo } from "../redux/slices/todos/todos.slice";

const MOBILE_WIDTH = 350;
const SM_WIDTH = 500;
const MD_WIDTH = 550;
const LG_WIDTH = 600;
const XL_WIDTH = 600;

const WIDTH_VARIANTS = {
  mobile: "w-[350px] h-[350px]",
  sm: "sm:w-[500px] sm:h-[500px]",
  md: "md:w-[550px] md:h-[550px]",
  lg: "lg:w-[600px] lg:h-[600px]",
  xl: "xl:w-[600px] xl:h-[600px]",
};

const ABSOLUTE_LEFT_VARIANTS = {
  mobile: `left-[175px]`,
  sm: `sm:left-[250px]`,
  md: `md:left-[225px]`,
  lg: `lg:left-[300px]`,
  xl: `xl:left-[300px]`,
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
    else if (screenWitdh >= 1024 && screenWitdh <= 1280) {
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
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div
        className={`${WIDTH_VARIANTS.mobile} ${WIDTH_VARIANTS.sm} ${WIDTH_VARIANTS.md} ${WIDTH_VARIANTS.lg} ${WIDTH_VARIANTS.xl} border-l-4 border-b-4 border-yellow-300 z-10 relative rounded`}
      >
        {todos.map((todo) => (
          <div
            style={{
              bottom: fixPosition(todo.importanceRating, browserWidth),
              left: fixPosition(todo.urgencyRating, browserWidth),
            }}
            title={`T??che: ${todo.task}\nImportant: ${
              todo.importanceRating
            }/10\nUrgent: ${todo.urgencyRating}/10\n${
              todo.completed ? "Termin??e" : "?? faire"
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
            ?? planifier
          </p>

          <img
            className="flex justify-center h-1/2 p-5 opacity-25"
            src="../../images/preparation.png"
            alt="Logo t??ches ?? planifier"
          />
        </div>
        <div
          className={`w-1/2 h-1/2 absolute ${ABSOLUTE_LEFT_VARIANTS.mobile} ${ABSOLUTE_LEFT_VARIANTS.sm} ${ABSOLUTE_LEFT_VARIANTS.md}  ${ABSOLUTE_LEFT_VARIANTS.lg} ${ABSOLUTE_LEFT_VARIANTS.xl} top-0 z-0 flex flex-col justify-center aligns-center border-b-4 border-green-600 border-dotted`}
        >
          <p className="text-center font-bold text-xl text-white">
            ?? traiter en priorit??
          </p>

          <img
            className="h-1/2 w-auto p-5 opacity-25"
            src="../../images/blue-fire.png"
            alt="Logo t??ches ?? traiter en priorit??"
          />
        </div>
        <div className="w-1/2 h-1/2 absolute bottom-0 left-0 z-0 flex flex-col justify-center aligns-center border-r-4 border-green-600 border-dotted ">
          <p className="text-center font-bold text-xl text-white">
            ?? abandonner
          </p>

          <img
            className="flex justify-center h-1/2 p-5 opacity-25"
            src="../../images/bin.png"
            alt="Logo t??ches ?? abandonner"
          />
        </div>
        <div
          className={`w-1/2 h-1/2 absolute ${ABSOLUTE_LEFT_VARIANTS.mobile} ${ABSOLUTE_LEFT_VARIANTS.sm} ${ABSOLUTE_LEFT_VARIANTS.md} ${ABSOLUTE_LEFT_VARIANTS.lg} ${ABSOLUTE_LEFT_VARIANTS.xl}  bottom-0  z-0 flex flex-col justify-center aligns-center`}
        >
          <p className="text-center font-bold text-xl text-white">?? d??l??guer</p>

          <img
            className="flex justify-center h-1/2 p-5 opacity-25"
            src="../../images/deleguate.png"
            alt="Logo t??ches ?? d??l??guer"
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

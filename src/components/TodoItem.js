import React from "react";
import { useDispatch } from "react-redux";
import { removeOneTodo, toggleTodo } from "../redux/slices/todos/todos.slice";
import { BiTrashAlt } from "react-icons/bi";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between text-white pt-3 pb-3 relative">
      <div className="flex justify-between w-full">
        <div className="flex flex-1">
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            className="h-5 w-5 rounded-xl mr-3"
            onClick={() => dispatch(toggleTodo(todo.id))}
          />
          <p className={`capitalize ${todo.completed && "line-through"}`}>
            {todo.task}
          </p>
        </div>

        <p className="flex-1 text-center">{todo.importanceRating}/10</p>
        <p className="flex-1 text-center">{todo.urgencyRating}/10</p>
      </div>
      <button
        className="absolute right-0 text-red-500 text-2xl"
        onClick={() => dispatch(removeOneTodo(todo.id))}
      >
        <BiTrashAlt />
      </button>
    </div>
  );
};

export default TodoItem;

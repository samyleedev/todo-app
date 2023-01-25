import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOneTodo, toggleTodo } from "../redux/slices/todos/todos.slice";
import { BiTrashAlt } from "react-icons/bi";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const todosView = useSelector((state) => state.todos.todosView);
  const handleToggle = (event) => {
    if (event.target.checked) {
    }
  };
  return (
    <div className="flex justify-between text-white pt-3 pb-3">
      <div className="flex">
        <input
          type="checkbox"
          checked={todo.completed}
          className="h-5 w-5 rounded-xl mr-3"
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
        <p className={`capitalize ${todo.completed && "line-through"}`}>
          {todo.task}
        </p>
      </div>
      <button onClick={() => dispatch(removeOneTodo(todo.id))}>
        <BiTrashAlt />
      </button>
    </div>
  );
};

export default TodoItem;

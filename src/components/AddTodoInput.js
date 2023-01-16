import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todos/todos.slice";

const AddTodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      dispatch(addTodo(inputValue));
    }

    setInputValue("");
  };
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="w-full">
      <form>
        <input
          type="text"
          value={inputValue}
          placeholder="Ajouter une tâche"
          onChange={(e) => handleOnChange(e)}
        />
        <button
          className="text-white"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddTodoInput;

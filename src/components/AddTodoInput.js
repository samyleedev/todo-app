import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todos/todos.slice";
import { Slider } from "@mui/material";

const AddTodoInput = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);
  const [importanceRating, setImportanceRating] = useState(5);
  const [urgencyRating, setUrgencyRating] = useState(5);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.length < 3) {
      setError(
        "L'intitulé de la tâche doit être composé au minimum de 3 caractères."
      );
    }
    if (task.length === 0) {
      setError("Vous devez entrer l'intitulé de la tâche à ajouter.");
    }
    if (task.length >= 3) {
      const newTodo = {
        task,
        importanceRating,
        urgencyRating,
      };
      dispatch(addTodo(newTodo));
      setTask("");
      setImportanceRating(5);
      setUrgencyRating(5);
    }
  };
  const handleOnChangeTask = (event) => {
    setTask(event.target.value);
    setError(null);
  };

  const handleOnChangeImportance = (event) => {
    setImportanceRating(event.target.value);
  };

  const handleOnChangeUrgency = (event) => {
    setUrgencyRating(event.target.value);
  };

  const marksImportance = [
    {
      value: 0,
      label: "Pas important",
    },

    {
      value: 10,
      label: "Très important",
    },
  ];
  const marksUrgency = [
    {
      value: 0,
      label: "Pas urgent",
    },

    {
      value: 10,
      label: "Très urgent",
    },
  ];
  const valuetext = (value) => {
    return `${value}`;
  };
  return (
    <div className="mt-2 p-3 bg-slate-600 rounded">
      <form>
        <input
          className="w-full rounded p-2 bg-slate-100"
          type="text"
          value={task}
          placeholder="Ajouter une tâche"
          onChange={(e) => handleOnChangeTask(e)}
        />
        {error && <p className="text-red-600 font-bold mt-1">{error}</p>}
        <div className="m-12 text-white">
          <Slider
            min={0}
            max={10}
            defaultValue={5}
            getAriaValueText={valuetext}
            onChange={(e) => handleOnChangeImportance(e)}
            step={1}
            sx={{
              color: "success.main",
              "& .MuiSlider-markLabel": {
                fontSize: "1rem",
                color: "#fff",
              },
              "& .MuiSlider-rail": {
                height: "8px",
              },
              "& .MuiSlider-mark": {
                height: "8px",
              },
            }}
            value={importanceRating}
            valueLabelDisplay="on"
            marks={marksImportance}
          />
        </div>
        <div className="m-12 text-white">
          <Slider
            min={0}
            max={10}
            defaultValue={5}
            getAriaValueText={valuetext}
            onChange={(e) => handleOnChangeUrgency(e)}
            value={urgencyRating}
            step={1}
            sx={{
              "& .MuiSlider-markLabel": {
                fontSize: "1rem",
                color: "#fff",
              },
              "& .MuiSlider-rail": {
                height: "8px",
              },
              "& .MuiSlider-mark": {
                height: "8px",
              },
            }}
            valueLabelDisplay="on"
            marks={marksUrgency}
          />
        </div>

        <button
          className="text-white w-full bg-green-500 pt-3 pb-3 rounded"
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

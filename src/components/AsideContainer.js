import React from "react";
import FilterMenu from "./FilterMenu";
import AddTodoInput from "./AddTodoInput";
import TodosList from "./TodosList";
import { useDispatch, useSelector } from "react-redux";
import { displayAppView } from "../redux/slices/todos/todos.slice";
import { current } from "@reduxjs/toolkit";

const AsideContainer = () => {
  const dispatch = useDispatch();
  const appView = useSelector((state) => state.todos.appView);

  const toggleView = () => {
    if (appView === "list") {
      dispatch(displayAppView("matrix"));
    }
    if (appView === "matrix") {
      dispatch(displayAppView("list"));
    }
  };

  return (
    <div className="w-1/3 p-4 bg-slate-900">
      <button
        onClick={() => toggleView()}
        className="bg-violet-700 text-white rounded w-full p-3 cursor-pointer"
      >
        CHANGER DE VUE
      </button>
      <AddTodoInput />
      <div className="text-white mt-2">
        <h2 className="text-center font-bold text-xl mb-2">
          Bienvenue sur TheMatrixApp !
        </h2>
        <p className="mb-2">
          Ajoutez vos différentes tâches en leur associant une note d'importance
          et d'urgence.
        </p>
        <p className="mb-2">
          Visualisez vos tâches sous la forme d'une liste ou via la matrice
          d'Eisenhower. Cette dernière vous permettra en un coup d'oeil de voir
          quelles sont celles qui sont à faire en priorité et celle dont vous
          pouvez vous passez...
        </p>
        <p className="mb-2">
          Dans la matrice d'Eisenhower, survolez les tâches pour voir apparaître
          les informations correspondantes. La tâche est terminée ? Cliquez
          dessus pour changer son statut. Vous voulez la supprimer ? Cliquez
          avec le bouton droit !
        </p>
      </div>
    </div>
  );
};

export default AsideContainer;

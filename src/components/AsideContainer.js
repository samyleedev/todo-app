import React from "react";
import AddTodoInput from "./AddTodoInput";
import { useDispatch, useSelector } from "react-redux";
import { setAppView } from "../redux/slices/todos/todos.slice";

const AsideContainer = () => {
  const dispatch = useDispatch();
  const appView = useSelector((state) => state.todos.appView);

  const toggleView = () => {
    if (appView === "list") {
      dispatch(setAppView("matrix"));
    }
    if (appView === "matrix") {
      dispatch(setAppView("list"));
    }
  };

  return (
    <div className="md:w-1/3 p-4 bg-slate-900 overflow-y-scroll">
      <button
        onClick={() => toggleView()}
        className="bg-violet-700 text-white rounded w-full p-3 cursor-pointer "
      >
        {appView === "matrix"
          ? 'Passer en vue "Liste"'
          : 'Passer en vue "Matrice"'}
      </button>
      <AddTodoInput />
      <div className="text-white mt-2 p-4">
        <h2 className="text-center font-bold text-xl mb-2">
          Bienvenue sur TheMatrixApp !
        </h2>
        <p className="mb-2">
          Ajoutez vos différentes tâches en leur associant une note d'importance
          et d'urgence.import AddTodoInput from './AddTodoInput';
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

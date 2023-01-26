import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
  todosFilter: "all",
  appView: "list",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        task: action.payload.task,
        importanceRating: action.payload.importanceRating,
        urgencyRating: action.payload.urgencyRating,
        completed: false,
      };
      state.todosList.push(newTodo);
    },
    removeOneTodo: (state, action) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    removeAllTodos: (state) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.completed === false
      );
    },
    toggleTodo: (state, action) => {
      const todo = state.todosList.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    displayTodosFilter: (state, action) => {
      switch (action.payload) {
        case "all":
          state.todosFilter = "all";
          break;
        case "active":
          state.todosFilter = "active";
          break;
        case "completed":
          state.todosFilter = "completed";
          break;
        default:
          return state;
      }
    },
    displayAppView: (state, action) => {
      switch (action.payload) {
        case "list":
          state.appView = "list";
          break;
        case "matrix":
          state.appView = "matrix";
          break;
        default:
          return state;
      }
    },
  },
});

export const {
  addTodo,
  removeOneTodo,
  removeAllTodos,
  toggleTodo,
  displayTodosFilter,
  displayAppView,
} = todosSlice.actions;

export default todosSlice;

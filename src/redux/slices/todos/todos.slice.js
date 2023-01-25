import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
  todosView: "all",
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
    displayTodosView: (state, action) => {
      switch (action.payload) {
        case "all":
          state.todosView = "all";
          break;
        case "active":
          state.todosView = "active";
          break;
        case "completed":
          state.todosView = "completed";
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
  displayTodosView,
} = todosSlice.actions;

export default todosSlice;

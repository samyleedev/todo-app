import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
  todosFilter: "all",
  todosSortBy: "taskName",
  todosSortOrderByAsc: true,
  appView: "list",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
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
    setTodosFilter: (state, action) => {
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
    setTodosSortBy: (state, action) => {
      switch (action.payload) {
        case "taskName":
          state.todosSortBy = "taskName";
          break;
        case "importance":
          state.todosSortBy = "importance";
          break;
        case "urgency":
          state.todosSortBy = "urgency";
          break;
        default:
          return state;
      }
    },
    toggleTodosSortOrder: (state, action) => {
      state.todosSortOrderByAsc = !state.todosSortOrderByAsc;
    },
    setAppView: (state, action) => {
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
  setTodosFilter,
  setTodosSortBy,
  toggleTodosSortOrder,
  setAppView,
} = todosSlice.actions;

export const selectTodosFilteredAndSorted = createSelector(
  (state) => state.todos.todosList,
  (state) => state.todos.todosFilter,
  (state) => state.todos.todosSortBy,
  (state) => state.todos.todosSortOrderByAsc,

  (todoList, filter, sortBy, orderIsAsc) => {
    let todos = [...todoList];

    if (filter === "completed") {
      todos = todos.filter((todo) => todo.completed);
    } else if (filter === "active") {
      todos = todos.filter((todo) => !todo.completed);
    }

    if (sortBy === "taskName") {
      todos = todos.sort((a, b) => {
        let sortFunction;
        if (orderIsAsc) {
          sortFunction = a.taskName > b.taskName ? -1 : 1;
        } else if (!orderIsAsc) {
          sortFunction = b.taskName > a.taskName ? -1 : 1;
        }
        return sortFunction;
      });
    } else if (sortBy === "importance") {
      todos = todos.sort((a, b) => {
        let sortFunction;
        if (orderIsAsc) {
          sortFunction = a.importanceRating - b.importanceRating;
        } else if (!orderIsAsc) {
          sortFunction = b.importanceRating - a.importanceRating;
        }
        return sortFunction;
      });
    } else if (sortBy === "urgency") {
      todos = todos.sort((a, b) => {
        let sortFunction;
        if (orderIsAsc) {
          sortFunction = a.urgencyRating - b.urgencyRating;
        } else if (!orderIsAsc) {
          sortFunction = b.urgencyRating - a.urgencyRating;
        }
        return sortFunction;
      });
    }

    return todos;
  }
);

export default todosSlice;

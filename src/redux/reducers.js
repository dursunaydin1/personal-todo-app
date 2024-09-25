import {
  ADD_TODO,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

const initialState = {
  todos: [],
  filter: "ALL",
  searchTerm: "",
};

const todoReducer = (state = initialState, action) => {
  const { filter, searchTerm } = state;

  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter,
        searchTerm,
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter,
        searchTerm,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((_, index) => index !== action.payload.id),
        filter,
        searchTerm,
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter,
        searchTerm,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter,
        searchTerm,
      };

    case FILTER_TODOS:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm,
      };

    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        filter,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter,
        searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;

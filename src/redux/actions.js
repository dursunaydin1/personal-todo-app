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

const createAction = (type, payload = {}) => ({ type, payload });

export const addTodo = (text) => createAction(ADD_TODO, { text });
export const toggleTodo = (id) => createAction(TOGGLE_TODO, { id });
export const removeTodo = (id) => createAction(REMOVE_TODO, { id });
export const markCompleted = (id) => createAction(MARK_COMPLETED, { id });
export const markIncomplete = (id) => createAction(MARK_INCOMPLETE, { id });
export const filterTodos = (filter) => createAction(FILTER_TODOS, { filter });
export const markAllCompleted = () => createAction(MARK_ALL_COMPLETED);
export const updateSearchTerm = (searchTerm) =>
  createAction(UPDATE_SEARCH_TERM, { searchTerm });

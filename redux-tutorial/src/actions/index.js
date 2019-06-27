import { ADD_TODO, DELETE_TODO, SELECTED_TODO } from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const deleteTodo = index => ({
  type: DELETE_TODO,
  index,
});

export const selectedTodo = index => ({
  type: SELECTED_TODO,
  index,
});

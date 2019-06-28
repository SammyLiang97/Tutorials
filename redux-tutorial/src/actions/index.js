import {
  ADD_TODO, DELETE_TODO, SELECTED_TODO, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE,
} from './actionTypes';
import fetchTodosFunc from '../mock';

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

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  todos,
});

export const fetchTodosFailure = () => ({
  type: FETCH_TODOS_FAILURE,
});

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});


export const fetchTodos = () => (dispatch) => {
  dispatch(fetchTodosRequest());

  fetchTodosFunc()
    .then((res) => {
      if (res.success) {
        dispatch(fetchTodosSuccess(res.data));
      } else {
        dispatch(fetchTodosFailure());
      }
    });
};

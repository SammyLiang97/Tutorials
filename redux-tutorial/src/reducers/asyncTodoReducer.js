import { FETCH_TODOS_SUCCESS, FETCH_TODOS_REQUEST, FETCH_TODOS_FAILURE } from '../actions/actionTypes';

export const STATUS = {
  FAILURE: -1,
  REQUEST: 0,
  SUCCESS: 1,
};

const initialState = {
  fetchingStatus: undefined,
  todos: [],
};

const asyncTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return Object.assign({}, state, {
        fetchingStatus: STATUS.SUCCESS,
        todos: [...action.todos],
      });
    case FETCH_TODOS_REQUEST:
      return Object.assign({}, state, {
        fetchingStatus: STATUS.REQUEST,
      });
    case FETCH_TODOS_FAILURE:
      return Object.assign({}, state, {
        fetchingStatus: STATUS.FAILURE,
      });
    default:
      return state;
  }
};

export default asyncTodoReducer;

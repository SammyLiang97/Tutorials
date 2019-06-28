import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import asyncTodoReducer from './asyncTodoReducer';

const rootReducer = combineReducers({
  todoReducer,
  asyncTodoReducer,
});

export default rootReducer;

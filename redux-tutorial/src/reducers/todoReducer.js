import { ADD_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [
    {
      index: 1,
      title: 'Default Todo 1',
      description: 'Automatic generated',
    },
    {
      index: 2,
      title: 'Default Todo 2',
      description: 'Automatic generated',
    },
  ],
  selectedTodoIndex: undefined,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          action.todo,
        ],
      });
    default:
      return state;
  }
};

export default todoReducer;
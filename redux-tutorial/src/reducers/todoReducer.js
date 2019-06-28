import { ADD_TODO, SELECTED_TODO, DELETE_TODO } from '../actions/actionTypes';

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
    case SELECTED_TODO:
      return Object.assign({}, state, {
        selectedTodoIndex: action.index,
      });
    case DELETE_TODO: {
      state.todos.splice(state.todos.findIndex(({ index }) => index === action.index), 1);
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
        ],
      });
    }
    default:
      return state;
  }
};

export default todoReducer;

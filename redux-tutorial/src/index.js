import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './app';
import rootReducer from './reducers';
import './style/main.css';

const middlewares = [reduxThunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

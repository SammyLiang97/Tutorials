import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import rootReducer from './reducers';
import './style/main.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

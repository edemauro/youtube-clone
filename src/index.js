import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';
import App from './components/app';

import { fetchVideos } from './actions';

const loggerMiddleware = createLogger();

let store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('.container-fluid')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';
import App from './components/app';

import { fetchVideos } from './actions';

let middleware = [ thunk ]

if(process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();
  middleware = [ ...middleware, loggerMiddleware ];
}

console.log(process.env.NODE_ENV);

let store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('.container')
);
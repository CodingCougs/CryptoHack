import { createStore, applyMiddleware } from 'redux';

import createGlobalReducer from './global-reducer';

const middleware = [

  ];

// mount it on the Store
const store = createStore(
  createGlobalReducer(),
  applyMiddleware(...middleware)
);

export default store;


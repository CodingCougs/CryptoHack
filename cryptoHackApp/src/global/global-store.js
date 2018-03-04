import { createStore, applyMiddleware } from 'redux';
import createGlobalReducer from './global-reducer';
import createSagaMiddleware from 'redux-saga';
import globalSagas from './global-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
  ];

// mount it on the Store
const store = createStore(
  createGlobalReducer(),
  applyMiddleware(...middleware)
);

export default store;


import { createStore, applyMiddleware, combineReducers, compose } from 'redux'


import BaseAppReducer from '../base/baseApp_reducer'

const containersReducers = {
  containers: combineReducers({
    BaseAppReducer
      //add reducers
  }),
}

const createGlobalReducer = () => (
  combineReducers({
      ...containersReducers,
  })
);

export default createGlobalReducer;
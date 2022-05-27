import { createStore, applyMiddleware, compose } from 'redux'
import allReducers from './reducers';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const myCustomMiddlewares = (state) => {
  return function (next) {
    return function (action) {

      console.log(state.getState())
      console.log("Middleware is called")
      next(action)
    }
  }
}

const myCustomMiddleware = state => next => action => {
  console.log(state.getState())
  console.log("Middleware is called")
  next(action)
}

const midd2 = (state) => {
  return function (next) {
    return function (action) {
      console.log("Middleware2 is called")
      next(action)
    }
  }
}

const store = createStore(allReducers, compose(applyMiddleware(myCustomMiddlewares, midd2, logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
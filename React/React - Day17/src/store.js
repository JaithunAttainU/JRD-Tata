import { createStore, applyMiddleware, compose } from 'redux'
import allReducers from './reducers';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(allReducers, compose(applyMiddleware(logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
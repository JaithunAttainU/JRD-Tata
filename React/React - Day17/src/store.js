import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(allReducers, applyMiddleware(logger, thunkMiddleware));

export default store;
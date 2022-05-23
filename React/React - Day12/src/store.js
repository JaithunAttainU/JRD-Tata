import { createStore } from 'redux'
import reducers from './reducers';

const myStore = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default myStore;
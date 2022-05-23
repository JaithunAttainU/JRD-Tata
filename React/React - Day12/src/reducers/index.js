import { combineReducers } from "redux";
import updateCounter from "./counter";

const reducers = combineReducers({
  updateCounter,
})

export default reducers;
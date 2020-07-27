import { combineReducers } from "redux";
import counter from "./counterReducer";

const rootReducers = combineReducers({
  counter
});
export default rootReducers;

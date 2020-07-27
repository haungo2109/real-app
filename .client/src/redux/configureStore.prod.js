import rootReducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default function configureStore() {
  return createStore(
    rootReducers,
    applyMiddleware(thunk) //this func warn mutable mistake
  );
}

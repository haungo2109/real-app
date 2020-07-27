import rootReducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import reduxImutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //support redux dev tool
  return createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk, reduxImutableStateInvariant())) //this func warn mutable mistake
  );
}

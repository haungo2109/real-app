import { INCREMENT, DECREMENT } from "../actions/actionType";
import initState from "./initState";

export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state.counter, counter: state.counter+1};
    case DECREMENT:
      return { ...state.counter, counter: state.counter-1 };
    default:
      return state;
  }
}

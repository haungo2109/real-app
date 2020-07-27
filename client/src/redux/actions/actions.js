import { INCREMENT, DECREMENT } from "./actionType";

export const incrementSuccess = () => ({ type: INCREMENT });
export const decrementSuccess = () => ({ type: DECREMENT });

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// export function increment() {
//   return function (dispatch) {
//     dispatch(incrementSuccess());
//   };
// }
// export function decrement() {
//   return function (dispatch) {
//     dispatch(decrementSuccess());
//   };
// }

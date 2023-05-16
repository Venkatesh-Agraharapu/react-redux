import { COUNT_INCREMENT, COUNT_DECREMENT } from "./actions";

const initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default countReducer;

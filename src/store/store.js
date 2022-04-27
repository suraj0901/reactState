import { createStore } from "./customStore";

export const useCounter = createStore({
  state: {
    count: 0,
  },
  action: {
    increament(state) {
      ++state.count;
      return state;
    },
    decreament(state) {
      --state.count;
      return state;
    },
    setCount(state, value) {
      state.count = value;
      return state;
    },
  },
});

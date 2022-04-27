import { useEffect, useState } from "react";

const createStore = (store) => {
  let list = [];

  const newActions = {};
  const rerender = () => {
    for (const render of list) {
      render((val) => !val);
    }
  };

  const previousActions = store.action;
  for (const action in previousActions) {
    newActions[action] = (...arg) => {
      store.state = previousActions[action](store.state, ...arg);
      console.log(store.state);
      rerender();
    };
  }
  store.action = newActions;
  return () => {
    const rerender = useState(false)[1];
    useEffect(() => {
      list.push(rerender);
      return () => {
        list = list.filter((l) => l !== rerender);
      };
    }, []);
    return store;
  };
};

export const useCounter = createStore({
  state: {
    count: 0,
  },
  action: {
    increament(state) {
      return { count: ++state.count };
    },
    decreament(state) {
      return { count: --state.count };
    },
    setCount(state, value) {
      return { count: value };
    },
  },
});

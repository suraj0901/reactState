import { useEffect, useState } from "react";

export const createStore = (store) => {
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
      rerender();
    };
  }
  store.action = newActions;
  return (shouldListen = true) => {
    const rerender = useState(false)[1];
    useEffect(() => {
      if (shouldListen) {
        list.push(rerender);
        return () => {
          list = list.filter((l) => l !== rerender);
        };
      }
    }, []);
    return store;
  };
};

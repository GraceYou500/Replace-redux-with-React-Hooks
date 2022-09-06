import { useEffect, useState } from 'react';

let globalState = {}; // variables here is blocked in the file scope, not global, because they are not exported.
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; // only interesed in setState function here.

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(li => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};

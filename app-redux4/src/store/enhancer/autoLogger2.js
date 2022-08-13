export default function autoLogger2() {
  return (createStore) => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState);
    function dispatch(action) {
      console.log(`dispatch an action2: ${JSON.stringify(action)}`);
      const res = store.dispatch(action);
      const newState = store.getState();
      console.log(`current state2: ${JSON.stringify(newState)}`);
      return res;
    }
    return { ...store, dispatch };
  };
}

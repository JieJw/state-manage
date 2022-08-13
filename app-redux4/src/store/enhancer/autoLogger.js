// autoLogger.js
// store enhancer
export default function autoLogger() {
  return (createStore) => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState);
    function dispatch(action) {
      console.log(`dispatch an action: ${JSON.stringify(action)}`);
      const res = store.dispatch(action);
      const newState = store.getState();
      console.log(`current state: ${JSON.stringify(newState)}`);
      return res;
    }
    return { ...store, dispatch };
  };
}

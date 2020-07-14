// DONT DO THIS
// npm i redux-thunk

export default (store) => (next) => (action) =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);

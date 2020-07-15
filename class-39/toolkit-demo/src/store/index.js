import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducer from './slice';
console.log('REDUCER?', reducer);
const rootReducer = combineReducers({
  people: reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

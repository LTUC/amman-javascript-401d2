import { createStore, combineReducers } from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension'; //optional

import candidates from './candidates';
import votes from './votes';

const rootReducer = combineReducers({ candidates, votes });
const store = () => {
  return createStore(rootReducer);
};

export default store();

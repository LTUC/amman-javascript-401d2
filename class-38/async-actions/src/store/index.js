import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from './middleware/thunk'; //'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const rootReducer = combineReducers({
  data: reducer,
});
const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  // const createdStore = createStore(rootReducer, applyMiddleware(thunk));
};

export default store();

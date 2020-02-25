import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// Initial States
import { INITIAL_STATE as ItemsInitialState } from '../items/types/initialState';

// Initial state of the root Redux store
const INITIAL_STATE = {
  items: ItemsInitialState,
};

const initStore = (initialState = INITIAL_STATE) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default initStore;

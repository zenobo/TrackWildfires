import { combineReducers } from 'redux';

// Reducers
import { items } from '../items/reducers/index';

export const rootReducer = combineReducers({
  items,
});

import { combineReducers } from "redux";
import trackingone from './trackingone';
import trackinglist from './trackinglist';

const rootReducer = combineReducers({
  trackingone,
  trackinglist
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
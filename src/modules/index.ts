import { combineReducers } from "redux";
import trackinglist from './trackinglist';

const rootReducer = combineReducers({
  trackinglist
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
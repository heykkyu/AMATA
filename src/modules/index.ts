import { combineReducers } from "redux";
import auth from './auth'
import trackinglist from './trackinglist';

const rootReducer = combineReducers({
  auth,
  trackinglist
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
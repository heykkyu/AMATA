import { combineReducers } from "redux";
import trackings from './trackings';

const rootReducer = combineReducers({
  trackings
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
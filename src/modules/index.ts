import { combineReducers } from "redux";
import trackingsReducer from './trackings';

const rootReducer = combineReducers({
  trackingsReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
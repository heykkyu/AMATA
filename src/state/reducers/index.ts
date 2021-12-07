import { combineReducers } from "redux"
import bankReducer from "./bankReducer"
import authReducer from "./authReducer"

const reducers = combineReducers({
  bank: bankReducer,
  signin: authReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>


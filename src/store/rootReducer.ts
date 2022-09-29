import { combineReducers } from "redux";
import { authorizationReducer } from "./state/auth-reducer";
import { contentReducer } from './state/content-reducer';

const rootReducer = combineReducers({
  content: contentReducer,
  auth: authorizationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
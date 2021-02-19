import AuthenticationReducer from "./authentication.reducer";
import UserReducer from "./user.reducer";
import { combineReducers } from "redux";

/**
 *  Combine reducer function to combine all reducers
 */
export default combineReducers({
  authentication: AuthenticationReducer,
  user: UserReducer
});

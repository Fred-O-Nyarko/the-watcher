import { combineReducers } from "redux";

import currentUserReducer from "./currentUser";
import authReducer from "./auth";

const rootReducer = combineReducers({
  user: currentUserReducer,
  auth: authReducer,
});

export default rootReducer;

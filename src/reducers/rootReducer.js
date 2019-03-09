import { combineReducers } from "redux";
import profileReducer from "./profileInfo.js";

const rootReducer = combineReducers({
  profileInfo: profileReducer
});

export default rootReducer;

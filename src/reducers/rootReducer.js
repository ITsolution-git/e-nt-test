import { combineReducers } from "redux";
import profileReducer from "./profileInfo.js";
import onboardingReducer from "./onboarding.js";
import postsReducer from "./posts.js";
import staticsReducer from "./statics.js"

const rootReducer = combineReducers({
  profile: profileReducer,
  onboarding: onboardingReducer,
  posts: postsReducer,
  statics: staticsReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import profileReducer from "./profileInfo.js";
import onboardingReducer from "./onboarding.js";
import postsReducer from "./posts.js";

const rootReducer = combineReducers({
  profile: profileReducer,
  onboarding: onboardingReducer,
  posts: postsReducer
});

export default rootReducer;

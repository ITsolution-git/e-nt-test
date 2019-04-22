import { combineReducers } from "redux";
import profileReducer from "./profileInfo.js";
import onboardingReducer from "./onboarding.js";
import postsReducer from "./posts.js";
import staticsReducer from "./statics.js";
import peopleReducer from "./people.js";
import activitiesReducer from "./activities.js";
import videosReducer from "./videos.js";

const rootReducer = combineReducers({
  profile: profileReducer,
  onboarding: onboardingReducer,
  posts: postsReducer,
  statics: staticsReducer,
  people: peopleReducer,
  activities: activitiesReducer,
  videos: videosReducer
});

export default rootReducer;

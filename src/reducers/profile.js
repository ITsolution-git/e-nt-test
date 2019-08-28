import {
  PROFILE,
} from "../actions/types.js";

const intialState = {
  fbUser: null,
  fbToken: ''
};

export default function(state = intialState, action) {
  switch (action.type) {
    case PROFILE.SET_FB_USER:
      return {
        ...state,
        fbUser: action.payload
      };
    
    case PROFILE.SET_FB_USER:
      return {
        ...state,
        fbUser: null
      };

    case PROFILE.SET_FB_TOKEN:
      return {
        ...state,
        fbToken: action.payload
      };

    default:
      return state;
  }
}

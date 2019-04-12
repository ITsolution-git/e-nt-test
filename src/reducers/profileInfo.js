import {
  PROFILE_SUCCESS,
  PROFILE_LOADING,
  PROFILE_LOGOUT,
  PROFILE_ERROR
} from "../config/type.js";

const intialState = {
  pofileData: null,
  profileLoading: false,
  profileError: null,
  isAuthenticated: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        profileLoading: true,
        profileData: null
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        profileLoading: false,
        profileError: false,
        isAuthenticated: true,
        profileData: action.payload
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profileLoading: false,
        profileError: true,
        profileData: action.payload,
        isAuthenticated: false
      };
    case PROFILE_LOGOUT:
      return {
        ...state,
        profileLoading: false,
        profileError: false,
        profileData: null,
        isAuthenticated: false
      };
    
    default:
      return state;
  }
}

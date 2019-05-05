import {
  PROFILE_SUCCESS,
  PROFILE_LOADING,
  PROFILE_LOGOUT,
  PROFILE_ERROR,
  PROFILE_SIGNUP_INITIAL
} from "../config/type.js";

const intialState = {
  profileData: null,
  profileLoading: false,
  profileError: null,
  isAuthenticated: false,
  signup_process_intial: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        profileLoading: true,
        profileData: null,
        profileError: false,
      };
    case PROFILE_SIGNUP_INITIAL: 
    return {
      ...state, 
      profileLoading: false, 
      profileError: false,
      profileData: action.payload,
      signup_process_intial: true
    }
    case PROFILE_SUCCESS:
      return {
        ...state,
        profileLoading: false,
        profileError: false,
        isAuthenticated: true,
        profileActualData: action.payload,
        signup_process_intial: true
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

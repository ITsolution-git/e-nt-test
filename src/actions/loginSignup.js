import {
  PROFILE_SUCCESS,
  PROFILE_LOADING,
  PROFILE_LOGOUT,
  PROFILE_ERROR,
  PROFILE_SIGNUP_INITIAL
} from "../config/type.js";
import firebase from "react-native-firebase";

export const login = (fullName, username, email, password) => {
  return async (dispatch) => {
    dispatch({ type: PROFILE_LOADING });
    console.log(`Action Dispatched`)
    return await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log("This is user from login", user);
        return dispatch({
          type: PROFILE_SIGNUP_INITIAL,
          payload: user
        });
      })
      .catch(error => {
        return dispatch({
          type: PROFILE_ERROR,
          payload: error.data
        });
      });
  };
};

export const loginSession = user => {
  return function(dispatch) {
    console.log("this is user from login Session", user);
    return dispatch({
      type: PROFILE_SUCCESS,
      payload: user
    });
  };
};

export const signup =  (fullName, username, email, password) => {
  return function(dispatch) {
    dispatch({ type: PROFILE_LOADING });
     firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("This is user from signup", signup);
        return dispatch({
          type: PROFILE_SUCCESS,
          payload: {fullName, username, email}
        })
      })
      .catch(error => {
        console.log(error)
        return dispatch({
          type: PROFILE_ERROR,
          payload: error.message
        });
      });
  };
};

export const logout = () => {
  return function(dispatch) {
    dispatch({ type: PROFILE_LOADING });
    firebase.auth
      .signOut()
      .then(() => {
        return {
          dispatch: PROFILE_LOGOUT
        };
      })
      .catch(error => {
        return {
          dispatch: PROFILE_ERROR,
          payload: error.data
        };
      });
  };
};

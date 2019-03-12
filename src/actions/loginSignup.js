import {
  PROFILE_SUCCESS,
  PROFILE_LOADING,
  PROFILE_LOGOUT,
  PROFILE_ERROR
} from "../config/type.js";
import firebase from 'react-native-firebase'


export const login = (email, password) => {
  return function (dispatch) {
    dispatch({type: PROFILE_LOADING})
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
      return(
        dispatch({
          type: PROFILE_SUCCESS,
          payload: user
        })
      )
    })
    .catch(error => {
      return (
        dispatch({
            type: PROFILE_ERROR,
            payload: error.data
          })
        )
      })
    }
}
    
export const signup = (email, password) => {
  return function (dispatch) {
    dispatch({type: PROFILE_LOADING})
    firebase
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
      return(
        dispatch({
          type: PROFILE_SUCCESS,
          payload: user
        })
      )
    })
    .catch(error => {
      return (
        dispatch({
            type: PROFILE_ERROR,
            payload: error.data
          })
        )
      })
  }
}

export const logout = () => {
  return function (dispatch) {
    dispatch({type: PROFILE_LOADING})
    firebase
    .auth
    .signOut()
    .then(() => {
      return ({
        dispatch: PROFILE_LOGOUT
      })
    })
    .catch(error => {
      return ({
        dispatch:PROFILE_ERROR,
        payload: error.data
      })
    })
  }
}
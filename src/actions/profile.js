import {
  PROFILE
} from './types.js';
import firebase from 'react-native-firebase';
import { navigate } from '../utils/navigationService';


import { api } from '../utils/api';

export const setFBUser = user => {
  return (dispatch) => {
    return dispatch({
      type: PROFILE.SET_FB_USER,
      payload: user
    });
  };
};

export const setToken = token => {
  return (dispatch) => {
    return dispatch({
      type: PROFILE.SET_FB_TOKEN,
      payload: token
    });
  };
};

export const updateFBUser = info => {
  return (dispatch) => {
    return firebase.auth().currentUser
      .updateProfile(info)
      .then(() => {
        return {
          dispatch: PROFILE.SET_FB_USER,
          payload: firebase.auth().currentUser._user
        };
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};

export const updatePhoneNumber = number => {
  return (dispatch) => {
    // const credential = fireabse.auth.Phone
    return firebase.auth().currentUser
      .updatePhoneNumber(number)
      .then(() => {
        return {
          dispatch: PROFILE.SET_FB_USER,
          payload: firebase.auth().currentUser._user
        };
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    firebase.auth()
      .signOut()
      .then(() => {
        // navigate('Landing');
        return {
          dispatch: PROFILE.LOGOUT
        };
      })
      .catch(error => {
        console.log(error);
      });
  };
};


export const getProfile = () => {
  return (dispatch) => {
    return api.get('user');
  };
};
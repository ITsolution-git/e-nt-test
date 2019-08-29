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
  return async (dispatch) => {
    const response = await api.get('profile')

    dispatch({
      type: PROFILE.SET_PROFILE,
      payload: response.data
    });
  };
};


export const getFollowers = () => {
  return async (dispatch) => {
    const response = await api.get('user/followers')
    // return {
    //   dispatch: PROFILE.SET_PROFILE,
    //   payload: response.data
    // };
    return response.data
  };
};

export const getMyPosts = () => {
  return async (dispatch) => {
    const response = await api.get('user/posts')

    dispatch({
      type: PROFILE.SET_MY_POSTS,
      payload: response.data
    });
    return response.data
  };
};
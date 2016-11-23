import axios from 'axios';
import Keychain from 'react-native-keychain';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertsActions';

exports.loginUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {email, password}).then((response) => {
      var {user_id, token, profile} = response.data;
      console.log("test", response.data);
      Keychain.setGenericPassword(response.data.user_id, response.data.token)
      .then(function(){
        dispatch(authUser(user_id, profile));
      }).catch((error) => {
        dispatch(addAlert("Could not log in"));
        console.log("Error 1: ", error);
      });
    }).catch((error) => {
      dispatch(addAlert("Could not log in"));
      console.log("Error 1: ", error);
    });
  }
}

exports.signupUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, password}).then((response) => {
      var {user_id, token, profile} = response.data;
      Keychain.setGenericPassword(user_id, token)
      .then(function(){
        dispatch(authUser(user_id, profile));
      }).catch((error) => {
        dispatch(addAlert("Could not sign up"));
      });
    }).catch((error) => {
      dispatch(addAlert("Could not sign up"));
    });
  }
}

authUser = (user_id, profile) => {
  return {
    type: 'AUTH_USER',
    user_id,
    profile
  }
}

exports.unauthUser = {
    type: 'UNAUTH_USER'
}

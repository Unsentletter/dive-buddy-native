import axios from 'axios';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertsActions';

exports.loginUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {email, password}).then((response) => {
      var {user_id, token, profile} = response.data;
      dispatch(authUser(user_id, profile));
    }).catch((error) => {
      dispatch(addAlert("Could not log in"));
    });
  }
}

exports.signupUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, password}).then((response) => {
      var {user_id, token, profile} = response.data;
          dispatch(authUser(user_id, profile));
        }).catch((error) => {
          dispatch(addAlert("Could not sign up"));
        });
  }
}

authUser = (user_id, profile) => {
  return {
    type: 'AUTH_USER',
    user_id: user_id,
    profile: profile
  }
}

exports.unauthUser = {
    type: 'UNAUTH_USER'
}

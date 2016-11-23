import axios from 'axios';
import Keychain from 'react-native-keychain';

import {CREATE_URL, SIGNIN_URL} from '../api';
import {addAlert} from './alertsActions';

exports.createProfile = (diverUsername, numberOfDives, diverDescription, user_id) => {
  return function(dispatch) {
    console.log(CREATE_URL);
    console.log(SIGNIN_URL);

    return Keychain.getGenericPassword().then((credentials) => {
      var { username, password } = credentials;
      console.log(credentials);
      console.log(user_id);
      return axios.post(CREATE_URL.replace(":user_id", user_id), {diverUsername, numberOfDives, diverDescription, user_id}, {
        headers: {authorization: password}
      }).then((response) => {
        dispatch(profileCreator(response.data.profile));
      }).catch((error) => {
        dispatch(addAlert("Could not update profile"));
        console.log(error);
      })
    })
  }
}

exports.getProfile = function(dispatch) {
  return Keychain.getGenericPassword().then((credentials) => {
    var {username, password} = credentials;
    return axios.get()
  })
}

profileCreator = (newProfile) => {
  return {
    type: 'CREATE_PROFILE',
    newProfile
  }
}

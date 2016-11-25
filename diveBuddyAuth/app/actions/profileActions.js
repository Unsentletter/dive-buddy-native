import axios from 'axios';
import Keychain from 'react-native-keychain';

import {CREATE_URL, SIGNIN_URL} from '../api';
import {addAlert} from './alertsActions';

exports.createProfile = (diverUsername, numberOfDives, diverDescription, user_id) => {
  return function(dispatch) {
    return Keychain.getGenericPassword().then((credentials) => {
      var { username, password } = credentials;
      return axios.post(CREATE_URL.replace(":user_id", user_id), {diverUsername, numberOfDives, diverDescription, user_id}, {
        headers: {authorization: password}
      }).then((response) => {
        dispatch(profileCreator(response.data.profile));
      }).catch((error) => {
        dispatch(addAlert("Could not update profile"));
      })
    })
  }
}

exports.getProfile = function(dispatch) {
  return Keychain.getGenericPassword().then((credentials) => {
    var {username, password} = credentials;
    return axios.get(PROFILE_URL.replace(":user_id", user_id), {
      headers: {authorization: password}
    }).then((response) => {
      console.log("response.data Actions: ", response.data.profile)
      dispatch(setProfile(response.data.profile));
    }).catch((err) => {
      dispatch(addAlert("Couldnt get profile details"));
    })
  })
}

profileCreator = (profile) => {
  return {
    type: 'CREATE_PROFILE',
    profile
  }
}

setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    profile
  }
}

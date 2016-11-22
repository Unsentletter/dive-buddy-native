import axios from 'axios';

import {CREATE_URL} from '../api';

exports.createProfile = (username, numberOfDives, diverDescription, user_id) => {
  return function(dispatch) {
    return axios.post(CREATE_URL.replace(":user_id", user_id), {username, numberOfDives, diverDescription}).then((response) => {
      var {username, numberOfDives, diverDescription} = response.data;
      dispatch(profileCreator(username, numberOfDives, diverDescription));
    }).catch((error) => {
      dispatch(addAlert("Could not update profile"));
    });
  }
}

profileCreator = (username, numberOfDives, diverDescription) => {
  return {
    type: 'CREATE_PROFILE',
    username,
    numberOfDives,
    diverDescription
  }
}

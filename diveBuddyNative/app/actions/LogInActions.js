import axios from 'axios';

import { SIGNIN_URL, SIGNUP_URL } from '../api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const logInUser = (value) => {
  const logInDetails = {
    email: value.email,
    password: value.password,
  };
  console.log(logInDetails);
  return function () {
    axios.post(SIGNUP_URL, logInDetails)
      .then((data) => {
        console.log('signin', data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};

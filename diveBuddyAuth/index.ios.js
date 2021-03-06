/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import App from './app/components/App';
import CreateProfile from './app/components/CreateProfile'
import {configureStore} from './app/store'

class diveBuddyAuth extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('diveBuddyAuth', () => diveBuddyAuth);

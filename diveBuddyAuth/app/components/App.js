import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './Login';
import Main from './Main';
import CreateProfile from './CreateProfile';
import Profile from './Profile';
import AlertContainer from './alerts/AlertContainer';
import {Header} from './common';

var App = React.createClass({
  getInitialState() {
    return{}
  },
  render() {
    var renderMainView = () => {
      if (this.props.user_id) {
        if (this.props.profile){
          return (
            <Profile />
          );
        } else{
          return (
            <Profile />
          );
        }
      } else {
        return (
          <Login />
        );
      }
    }
    return (
      <View style={{flex: 1}}>
        {renderMainView()}
        <AlertContainer />
      </View>
    )
  }
});

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

var mapStateToProps = (state) => {
  return {
    user_id: state.auth.user_id,
    profile: state.auth.profile
  }
}

module.exports = connect(mapStateToProps)(App);

import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import axios from 'axios';

import {unauthUser} from '../actions';

var Main = React.createClass({
  onLogout: function() {
    this.props.dispatch(unauthUser);
  },

  createProfile() {
    console.log('in create profile');
    axios.post('http://localhost:3000/createprofile');
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>
          text
        </Text>
        <TouchableOpacity onPress={this.onLogout}>
          <Text>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports= connect()(Main);

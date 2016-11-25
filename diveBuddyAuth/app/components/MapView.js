import React, {Component} from 'react';
// import { MapView } from 'react-native';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import {unauthUser} from '../actions';

var Map = React.createClass({
  // onLogout: function() {
  //   this.props.dispatch(unauthUser);
  // },
  render() {

    return (

      <MapView style={styles.map}
     />

    );
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1,
    alignItems: 'stretch'
  }
});

module.exports= Map;

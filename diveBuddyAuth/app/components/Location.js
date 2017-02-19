import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from './common/Button';

class Location extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <Button>I will put a button or something here...</Button>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'stretch'
  }
});

module.exports= connect()(Location);

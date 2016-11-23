import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import {
  Header,
  Input,
  Card,
  CardSection
} from './common';

import {unauthUser} from '../actions';

var Main = React.createClass({
  onLogout: function() {
    this.props.dispatch(unauthUser);
  },

  render() {
    return (
      <Card>
        <CardSection>
          <Text>
            text
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            text
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            text
          </Text>
        </CardSection>

        <TouchableOpacity onPress={this.onLogout}>
          <Text>
            Log Out
          </Text>
        </TouchableOpacity>
      </Card>
    );
  }
});

const styles = StyleSheet.create({
});

module.exports= connect()(Main);

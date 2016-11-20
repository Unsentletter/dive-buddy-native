import React from 'react';
import {
  View,
  Text
} from 'react-native';

import {
  Card,
  Input
} from './common'

var CreateProfile = React.createClass({
  render() {
    return (
      <Card>
        <Text>
          Hello
        </Text>

        <Input />
        <Input />
        <Input />

      </Card>
    )
  }
});

module.exports = CreateProfile;

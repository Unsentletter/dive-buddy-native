import React from 'react';
import { reduxForm } from 'redux-form';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import {
  Card,
  Input,
  CardSection
} from './common'

var CreateProfile = React.createClass({
  render() {
    var {fields: {username, numberOfDives, diverDescription}} = this.props;

    return (
      <Card>
          <View style={styles.field}>
            <TextInput
              {...username}
              placeholder="Username"
              style={styles.textInput}
            />
          </View>

        <View style={styles.field}>
          <TextInput
            {...numberOfDives}
            placeholder="Number Of Dives"
            style={styles.textInput}
          />
        </View>

        <View style={styles.field}>
          <TextInput
            {...diverDescription}
            placeholder="Diver Description"
            style={styles.textInput}
          />
        </View>

      </Card>
    )
  }
});

const styles = StyleSheet.create({
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  }
})

module.exports = reduxForm({
  form: 'CreateProfile',
  fields: ['username', 'numberOfDives', 'diverDescription']
}, null, null)(CreateProfile);

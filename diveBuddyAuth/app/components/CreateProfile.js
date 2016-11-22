import React from 'react';
import { reduxForm } from 'redux-form';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Card,
  Input,
  CardSection,
  Button
} from './common'

import {createProfile, unauthUser} from '../actions';

var CreateProfile = React.createClass({
  profileCreator: function() {
    var {dispatch, fields: {username, numberOfDives, diverDescription, user_id}} = this.props;
      this.setState({
        loading: true
      });
    dispatch(createProfile(username.value, numberOfDives.value, diverDescription.value, user_id.value)).then(() => {
      this.setState({
        loading: false
      });
    })
  },
  onLogout: function() {
    this.props.dispatch(unauthUser);
  },

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

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.createProfile}>
            <Text style={styles.button}>
              Create Profile
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.onLogout}>
          <Text>
            Log Out
          </Text>
        </TouchableOpacity>

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
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})

module.exports = reduxForm({
  form: 'CreateProfile',
  fields: ['username', 'numberOfDives', 'diverDescription']
}, null, null)(CreateProfile);

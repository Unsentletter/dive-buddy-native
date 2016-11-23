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
  getInitialState: function() {
    return {
      loading: false
    }
  },

  profileCreator: function() {
    var {dispatch, user_id, fields: {diverUsername, numberOfDives, diverDescription}} = this.props;
      this.setState({
        loading: true
      });
    dispatch(createProfile(diverUsername.value, numberOfDives.value, diverDescription.value, user_id)).then(() => {
      this.setState({
        loading: false
      });
    })
  },
  onLogout: function() {
    this.props.dispatch(unauthUser);
  },

  render() {
    var {fields: {diverUsername, numberOfDives, diverDescription}} = this.props;

    return (
      <Card>
          <View style={styles.field}>
            <TextInput
              {...diverUsername}
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
          <TouchableOpacity onPress={this.profileCreator}>
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

var mapStateToProps = (state) => {
  return {
    user_id: state.auth.user_id
  }
}

module.exports = reduxForm({
  form: 'CreateProfile',
  fields: ['diverUsername', 'numberOfDives', 'diverDescription']
}, mapStateToProps)(CreateProfile);

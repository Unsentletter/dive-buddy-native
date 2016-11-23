import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import {
  Header,
  Input,
  Button,
  Card,
  CardSection
} from './common';

import {loginUser, signupUser, addAlert} from '../actions';

var Login = React.createClass({
  getInitialState: function() {
    return {
      loading: false
    }
  },

  onSignIn: function() {
    var {dispatch, fields: {email, password}} = this.props;
    this.setState({
      loading: true
    });
    dispatch(loginUser(email.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    })
  },

  onSignUp: function() {
    var {dispatch, fields: {email, password}} = this.props;
      this.setState({
        loading: true
      });
    dispatch(signupUser(email.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  },

  render() {
    var {fields: {email, password}} = this.props;

    var renderError = (field) => {
      if (field.touched && field.error) {
        return (
          <Text style={styles.formError}>
            {field.error}
          </Text>
        )
      }
    }

    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    } else {
      return (
        <Card>

          <View style={styles.field}>
            <TextInput
              {...email}
              placeholder="email@gmail.com"
              style={styles.textInput}
              autoCorrect={false}
            />
            <View>
              {renderError(email)}
            </View>
          </View>

          <View style={styles.field}>
            <TextInput
              {...password}
              placeholder="password"
              style={styles.textInput}
              autoCorrect={false}
            />
            <View>
              {renderError(password)}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.onSignIn}>
              <Text style={styles.button}>
                Sign In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onSignUp}>
              <Text style={styles.button}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

        </Card>
      );
    }
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
  formError: {
    color: 'red'
  }
});

var validate = (formProps) => {
  var errors = {};
  if (!formProps.email) {
    errors.email = "Please enter an email";
  }
  if (!formProps.password) {
    errors.password = "Please enter a password";
  }
  return errors;
}

module.exports = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Login);

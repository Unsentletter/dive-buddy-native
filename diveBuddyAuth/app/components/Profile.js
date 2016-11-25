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

import {unauthUser, getProfile} from '../actions';

var Profile = React.createClass({
  onLogout: function() {
    this.props.dispatch(unauthUser);
  },

  render() {
    var diverUsername = this.props.profile.diverUsername
    console.log(diverUsername);
    var numberOfDives = this.props.profile.numberOfDives
    var diverDescription = this.props.profile.diverDescription
    return (
      <Card>
        <CardSection>
          <Text>
            {diverUsername}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            {numberOfDives}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            {diverDescription}
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

var mapStateToProps = (state) => {
  return {
    profile: state.auth.profile
  }
}

module.exports= connect(mapStateToProps)(Profile);

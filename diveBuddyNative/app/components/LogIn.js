import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import { logInUser } from '../actions/LogInActions';

class LogIn extends React.Component {
  state = {
      email: '',
      password: '',
    };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          name="email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          name="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          title='Sign In'
        />
        <Button
          title='Sign Up'
          onPress={logInUser(this.state)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
});

export default LogIn;

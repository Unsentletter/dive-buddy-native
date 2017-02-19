import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColour: 'gray', borderWidth: 1}}
          onChangeText={}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LogIn;

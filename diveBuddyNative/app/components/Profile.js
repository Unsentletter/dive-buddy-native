import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Diver Profile Page
        </Text>
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

export default Profile;

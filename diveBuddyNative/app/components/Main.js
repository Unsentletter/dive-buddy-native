import React from 'react';
import {
  StyleSheet,
  Button,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Main extends React.Component {

  findDiversNavigation() {
    Actions.findDivers();
  }

  profileNavigation() {
    Actions.profile();
  }

  render() {
    return (
      <View style={styles.container}>
          <Button
            title='Find Divers'
            onPress={this.findDiversNavigation}
          />
        <Button
          title='View Profile'
          onPress={this.profileNavigation}
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
  }
});

export default Main;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class FindDivers extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <Text>
            Find Divers Page
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

export default FindDivers;

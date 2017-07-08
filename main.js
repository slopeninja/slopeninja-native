import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import App from './src/App';

class SlopeNinjaIndex extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);

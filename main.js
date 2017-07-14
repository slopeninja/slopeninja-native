import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { addNavigationHelpers } from 'react-navigation';


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

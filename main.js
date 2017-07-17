import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
} from 'redux';
import { StackNavigator } from 'react-navigation';

import App from './src/App';

/* reducers */
import nav from './src/reducers/nav';

const appReducer = combineReducers({
  nav,
});

const store = createStore(
  appReducer,
);

class SlopeNinja extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Expo.registerRootComponent(SlopeNinja);

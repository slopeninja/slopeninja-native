import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { StackNavigator } from 'react-navigation';
import reduxThunk from 'redux-thunk';

import App from './src/App';

/* reducers */
import nav from './src/reducers/nav';
import resorts from './src/reducers/resorts';


const app = combineReducers({
  resorts,
});

const rootReducer = combineReducers({
  app,
  nav,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    // middleware for intercepting and dispatching navigation actions
    reduxThunk,
  ),
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

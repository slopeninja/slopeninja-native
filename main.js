import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './src/App';

/* reducers */
import nav from './src/reducers/nav';
import favorites from './src/reducers/favorites';
import resorts from './src/reducers/resorts';

import {
  ActionSheetProvider,
} from '@expo/react-native-action-sheet';

const app = combineReducers({
  resorts,
  favorites,
});

const rootReducer = combineReducers({
  app,
  nav,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    // middleware for intercepting and dispatching navigation actions
    createLogger(),
    reduxThunk,
  ),
);

class SlopeNinja extends Component {
  render() {
    return (
      <Provider store={store}>
        <ActionSheetProvider>
          <App />
        </ActionSheetProvider>
      </Provider>
    );
  }
}

Expo.registerRootComponent(SlopeNinja);

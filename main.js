import Expo from 'expo';
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import {
  ActionSheetProvider,
} from '@expo/react-native-action-sheet';

import App from './src/App';

/* reducers */
import nav from './src/reducers/nav';
import favorites from './src/reducers/favorites';
import resorts from './src/reducers/resorts';

const app = combineReducers({
  resorts,
});

const rootReducer = combineReducers({
  app,
  nav,
  favorites,
});

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      // middleware for intercepting and dispatching navigation actions
      createLogger(),
      reduxThunk,
    ),
    autoRehydrate(),
  ),
);

// begin periodically persisting the store
persistStore(
  store,
  {
    storage: AsyncStorage,
    whitelist: ['favorites'],
  },
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

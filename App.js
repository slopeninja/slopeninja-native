import React from 'react';
import { AsyncStorage } from 'react-native';
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

import SlopeNinja from './src/SlopeNinja';

/* reducers */
import nav from './src/reducers/nav';
import favorites from './src/reducers/favorites';
import resorts from './src/reducers/resorts';
import userSession from './src/reducers/userSession';

const app = combineReducers({
  resorts,
});

const rootReducer = combineReducers({
  app,
  nav,
  favorites,
  userSession,
});

const middlewares = [reduxThunk];
if (__DEV__) { // eslint-disable-line no-undef
  middlewares.push(createLogger());
}

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
  ),
);

// begin periodically persisting the store
persistStore(
  store,
  {
    storage: AsyncStorage,
    whitelist: ['favorites', 'userSession'],
  },
);

const App = () => (
  <Provider store={store}>
    <ActionSheetProvider>
      <SlopeNinja />
    </ActionSheetProvider>
  </Provider>
);

export default App;

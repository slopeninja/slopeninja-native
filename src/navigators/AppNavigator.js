import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from '../components/Home/Home';
import Browser from '../components/Browser/Browser';

const routeConfigs = {
  Home: { screen: Home },
  Browser: { screen: Browser },
};

const stackNavigatorConfig = {
  mode: 'modal',
  headerMode: 'screen',
};

export const AppNavigator = StackNavigator(routeConfigs, stackNavigatorConfig);

const ConnectedAppNavigator = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ConnectedAppNavigator);

import { Font } from 'expo';
import {
  StyleSheet,
  View,
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bubbles } from 'react-native-loader';

import AppNavigator from './navigators/AppNavigator';

import LatoBold from '../assets/fonts/Lato-Bold.ttf';
import LatoRegular from '../assets/fonts/Lato-Regular.ttf';
import LatoLight from '../assets/fonts/Lato-Light.ttf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fontsReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Lato Bold': LatoBold,
      'Lato Regular': LatoRegular,
      'Lato Light': LatoLight,
    });

    this.setState({ fontsReady: true });
  }

  render() {
    if (!this.state.fontsReady) {
      return (
        <View style={styles.container}>
          <Bubbles size={20} color="#4A4A4A" />
        </View>
      );
    }

    return (
      <AppNavigator />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resortsStatus: state.app.resorts.resortsStatus,
  };
};


const ConnectedApp = connect(mapStateToProps, null)(App);

export default ConnectedApp;

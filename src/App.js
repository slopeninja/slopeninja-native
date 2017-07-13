import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Font } from 'expo';

import StatusBar from './components/StatusBar/StatusBar';
import AppBar from './components/AppBar/AppBar';
import TopNav from './components/TopNav/TopNav';
import ResortInfoCard from './components/ResortInfoCard/ResortInfoCard';

class App extends React.Component {
  state = {
    fontsReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Lato Bold': require('../assets/fonts/Lato-Bold.ttf'),
      'Lato Regular': require('../assets/fonts/Lato-Regular.ttf'),
      'Lato Light': require('../assets/fonts/Lato-Light.ttf'),
    });

    this.setState({ fontsReady: true });
  };

  render() {
    if (!this.state.fontsReady) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#1ED2FF',
          }}
        >
        </View>
      );
    }

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar
          backgroundColor="#1ED2FF"
          barStyle="light-content"
        />
        <AppBar />
        <TopNav />
        <ResortInfoCard />
      </View>
    );
  }
}

export default App;

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import StatusBar from './components/StatusBar/StatusBar';
import AppBar from './components/AppBar/AppBar';
import TopNav from './components/TopNav/TopNav';
import ResortInfoCard from './components/ResortInfoCard/ResortInfoCard';

const App = () => (
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
)

export default App;

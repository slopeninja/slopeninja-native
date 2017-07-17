import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import StatusBar from '../StatusBar/StatusBar';
import SlopeNinjaLogo from '../SlopeNinjaLogo/SlopeNinjaLogo';
import SearchBar from '../SearchBar/SearchBar';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1ED2FF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12
  },
  searchBarContainer: {
    flex: 1,
    paddingLeft: 12,
    height: 28,
  }
});

const HomeHeader = (props) => {
  return (
    <View>
      <StatusBar
        backgroundColor="#1ED2FF"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <SlopeNinjaLogo />
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

import SlopeNinjaLogo from '../SlopeNinjaLogo/SlopeNinjaLogo';
import SearchBar from '../SearchBar/SearchBar';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  appBar: {
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

const AppBar = (props) => {
  return (
    <View style={styles.appBar}>
      <SlopeNinjaLogo />
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
    </View>
  );
};

export default AppBar;

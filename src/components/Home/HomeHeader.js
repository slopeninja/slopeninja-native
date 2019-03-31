import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
} from 'react-native';

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
    paddingRight: 12,
  },
  searchBarContainer: {
    flex: 1,
    paddingLeft: 12,
    height: 28,
  },
});

const HomeHeader = () => (
  <SafeAreaView style={{ backgroundColor: '#1ED2FF' }}>
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
  </SafeAreaView>
);

export default HomeHeader;

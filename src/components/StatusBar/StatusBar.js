import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const SlopeNinjaStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      backgroundColor="#1CAACD"
      translucent
      {...props}
    />
  </View>
);

export default SlopeNinjaStatusBar;

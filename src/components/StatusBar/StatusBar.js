import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';

// https://stackoverflow.com/questions/46197660/what-is-the-top-bar-height-of-iphone-x
// https://github.com/react-community/react-navigation/issues/2589
const DEVICE_HEIGHT = Dimensions.get('window').height;
const IS_X = DEVICE_HEIGHT === 812;
const IOS_STATUS_BAR_HEIGHT = IS_X ? 44 : 20;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : StatusBar.currentHeight;

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

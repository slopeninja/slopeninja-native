import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

import AdaptiveText from '../AdaptiveText/AdaptiveText';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 65 : 56;

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#4A4A4A',
    justifyContent: 'center',
    alignItems: 'center',
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
  },
});

const AppBar = (props) => {
  return (
    <View style={styles.appBar}>
      <AdaptiveText
        style={{
          color: '#ffffff',
          fontSize: 16,
        }}
      >
        Slope Ninja
      </AdaptiveText>
    </View>
  );
};

export default AppBar;

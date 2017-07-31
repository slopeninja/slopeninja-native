import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import BoldText from '../AdaptiveText/BoldText';
import LightText from '../AdaptiveText/LightText';

const styles = StyleSheet.create({
  snowInfoContainer: {
    height: 120,
    flexDirection: 'column',
    flex: 1,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EDEDED',
    justifyContent: 'space-around',
  },
  snowInfoTitle: {
    fontSize: 24,
  },
  snowInfoContent: {
    fontSize: 24,
  },
});

const SnowInfo = props => (
  <View style={styles.snowInfoContainer}>
    <BoldText style={styles.snowInfoTitle}>{ props.title }</BoldText>
    <LightText style={styles.snowInfoContent}>{ props.value }</LightText>
  </View>
);

export default SnowInfo;

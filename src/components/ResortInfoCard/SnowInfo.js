import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import AdaptiveText from '../AdaptiveText/AdaptiveText';

const styles = StyleSheet.create({
  snowInfoContainer: {
    height: 120,
    flexDirection: 'column',
    flex: 1,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EDEDED',
    justifyContent: 'space-around'
  },
  snowInfoTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  snowInfoContent: {
    fontSize: 24,
    fontWeight: '200',
  }
});

const SnowInfo = (props) => (
  <View style={styles.snowInfoContainer}>
    <AdaptiveText style={styles.snowInfoTitle}>{ props.title }</AdaptiveText>
    <AdaptiveText style={styles.snowInfoContent}>{ props.value }</AdaptiveText>
  </View>
)

export default SnowInfo;

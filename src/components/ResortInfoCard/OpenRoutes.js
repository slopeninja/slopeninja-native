import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import HighwayIcon from './HighwayIcon';
import AdaptiveText from '../AdaptiveText/AdaptiveText';

const styles = StyleSheet.create({
  openRoutesContainer: {
    height: 150,
    flexDirection: 'column',
    flex: 1,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EDEDED',
    justifyContent: 'space-around'
  },
  highwayContainer: {
    flexDirection: 'row',
  },
  highwayIconContainer: {
    marginRight: 6,
    marginLeft: 6,
  },
  openRoutesTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  openRoutesContent: {
    fontSize: 24,
    fontWeight: '200',
  }
});

const OpenRoutes = (props) => (
  <View style={styles.openRoutesContainer}>
    <AdaptiveText style={styles.openRoutesTitle}>Open Routes</AdaptiveText>
    <View style={styles.highwayContainer}>
      <View style={styles.highwayIconContainer}>
        <HighwayIcon highwayNumber='88' />
      </View>
      <View style={styles.highwayIconContainer}>
        <HighwayIcon highwayNumber='89' />
      </View>
      <View style={styles.highwayIconContainer}>
        <HighwayIcon highwayNumber='580' />
      </View>
    </View>

  </View>
)

export default OpenRoutes;

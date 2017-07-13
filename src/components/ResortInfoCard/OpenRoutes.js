import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import HighwayIcon from '../HighwayIcons/HighwayIcon';
import IncidentIcon from '../HighwayIcons/IncidentIcon';
import AmbiguousIcon from '../HighwayIcons/AmbiguousIcon';

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
    position: 'relative',
    height: 54,
  },
  openRoutesTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  openRoutesContent: {
    fontSize: 24,
    fontWeight: '200',
  },
  exceptionIndicator: {
    zIndex: 999,
    position: 'absolute',
    left: 38,
    top: -8,
    width: 20,
    height: 20,
  }
});

const OpenRoutes = (props) => (
  <View style={styles.openRoutesContainer}>
    <AdaptiveText style={styles.openRoutesTitle}>Open Routes</AdaptiveText>
    <View style={styles.highwayContainer}>
      <View style={styles.highwayIconContainer}>
        <HighwayIcon highwayNumber='88' />
        <TouchableHighlight style={styles.exceptionIndicator}>
          <View>
            <IncidentIcon />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.highwayIconContainer}>
        <HighwayIcon highwayNumber='89' />
      </View>
      <View style={styles.highwayIconContainer}>
        <HighwayIcon highwayNumber='580' />
        <TouchableHighlight style={styles.exceptionIndicator}>
          <View>
            <AmbiguousIcon />
          </View>
        </TouchableHighlight>
      </View>
    </View>

  </View>
)

export default OpenRoutes;

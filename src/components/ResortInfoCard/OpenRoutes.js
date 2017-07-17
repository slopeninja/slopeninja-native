import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import HighwayIcon from '../HighwayIcons/HighwayIcon';
import IncidentIcon from '../HighwayIcons/IncidentIcon';
import AmbiguousIcon from '../HighwayIcons/AmbiguousIcon';

import BoldText from '../AdaptiveText/BoldText';

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
    <BoldText style={styles.openRoutesTitle}>Open Routes</BoldText>
    <View style={styles.highwayContainer}>
      <View style={styles.highwayIconContainer}>
        <HighwayIcon highwayNumber='88' />
        <TouchableHighlight
          style={styles.exceptionIndicator}
          underlayColor='transparent'
          onPress={() => {
            props.openBrowser()
          }}
        >
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

const mapDispatchToProps = dispatch => ({
  openBrowser: () =>
    dispatch(
      NavigationActions.navigate({ routeName: 'Browser' })
    ),
});

export default connect(null, mapDispatchToProps)(OpenRoutes);

import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
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
    justifyContent: 'space-around',
  },
  highwayContainer: {
    flexDirection: 'row',
  },
  highwayIconContainer: {
    position: 'relative',
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openRoutesTitle: {
    fontSize: 24,
  },
  exceptionIndicator: {
    zIndex: 999,
    position: 'absolute',
    left: 44,
    top: 0,
    width: 20,
    height: 20,
  },
});

const OpenRoutes = ({ roads, openBrowser }) => {
  const highwayIcons = roads.map((road) => {
    let incidentIcon;
    if (road.status === 'incident') {
      incidentIcon = (
        <TouchableHighlight
          hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
          style={styles.exceptionIndicator}
          underlayColor="transparent"
          onPress={() => {
            openBrowser(`${road.prefix} ${road.number}`, road.sourceUrl);
          }}
        >
          <View>
            <IncidentIcon />
          </View>
        </TouchableHighlight>
      );
    }

    let ambiguousIcon;
    if (road.status === 'ambiguous') {
      ambiguousIcon = (
        <TouchableHighlight
          hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
          style={styles.exceptionIndicator}
          underlayColor="transparent"
          onPress={() => {
            openBrowser(`${road.prefix} ${road.number}`, road.sourceUrl);
          }}
        >
          <View>
            <AmbiguousIcon />
          </View>
        </TouchableHighlight>
      );
    }

    const iconStyle = {
      opacity: (road.status === 'closed') ? 0.1 : 1,
    };

    return (
      <TouchableHighlight
        hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
        underlayColor="transparent"
        key={road.number}
        style={iconStyle}
        onPress={() => {
          openBrowser(`${road.prefix} ${road.number}`, road.sourceUrl);
        }}
      >
        <View
          style={styles.highwayIconContainer}
        >
          <HighwayIcon
            highwayNumber={road.number}
          />
          {incidentIcon}
          {ambiguousIcon}
        </View>
      </TouchableHighlight>
    );
  });

  return (
    <View style={styles.openRoutesContainer}>
      <BoldText style={styles.openRoutesTitle}>Open Routes</BoldText>
      <View style={styles.highwayContainer}>
        {highwayIcons}
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  openBrowser: (title, url) =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'Browser',
        params: {
          title,
          url,
        },
      }),
    ),
});

export default connect(null, mapDispatchToProps)(OpenRoutes);

import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import HighwayIcon from '../HighwayIcons/HighwayIcon';
import LightText from '../AdaptiveText/LightText';
import BoldText from '../AdaptiveText/BoldText';

const styles = StyleSheet.create({
  chainsContainer: {
    height: 180,
    flexDirection: 'column',
    flex: 1,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EDEDED',
    justifyContent: 'space-around',
  },
  chainStatusContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80,
  },
  chainStatusTitleContainer: {
    width: 40,
    borderRightWidth: 1,
    borderRightColor: '#DEDEDE',
    marginRight: 12,
  },
  chainsConditionContainer: {
    marginRight: 6,
    marginLeft: 6,
    flexDirection: 'row',
  },
  chainsTitle: {
    fontSize: 24,
  },
  statusTitle: {
    fontSize: 24,
  },
  highwayIconContainer: {
    marginRight: 6,
    marginLeft: 6,
    flexDirection: 'row',
  },
});

const Chains = ({ roads, openBrowser }) => {
  const R1Highways = roads.filter(key => key.chainStatus === 'R1');
  const R2Highways = roads.filter(key => key.chainStatus === 'R2');

  const r1HighwayIcons = R1Highways.map(
    key => (
      <TouchableHighlight
        underlayColor="transparent"
        key={key.number}
        onPress={() => {
          openBrowser(`${key.prefix} ${key.number}`, key.sourceUrl);
        }}
      >
        <View
          style={styles.highwayIconContainer}
        >
          <HighwayIcon
            highwayNumber={key.number}
            width={36}
            height={36}
          />
        </View>
      </TouchableHighlight>
    ),
  );
  const r2HighwayIcons = R2Highways.map(
    key => (
      <TouchableHighlight
        underlayColor="transparent"
        key={key.number}
        onPress={() => {
          openBrowser(`${key.prefix} ${key.number}`, key.sourceUrl);
        }}
      >
        <View
          style={styles.highwayIconContainer}
        >
          <HighwayIcon
            highwayNumber={key.number}
            width={36}
            height={36}
          />
        </View>
      </TouchableHighlight>
    ),
  );

  let r1Row;
  if (r1HighwayIcons.length > 0) {
    r1Row = (
      <View style={styles.chainsConditionContainer}>
        <View style={styles.chainStatusTitleContainer}>
          <LightText style={styles.statusTitle}>R1</LightText>
        </View>
        {r1HighwayIcons}
      </View>
    );
  }

  let r2Row;
  if (r2HighwayIcons.length > 0) {
    r2Row = (
      <View style={styles.chainsConditionContainer}>
        <View style={styles.chainStatusTitleContainer}>
          <LightText style={styles.statusTitle}>R2</LightText>
        </View>
        {r2HighwayIcons}
      </View>
    );
  }

  let noChainRow;
  if (!r1Row && !r2Row) {
    noChainRow = (
      <View>
        <LightText style={styles.statusTitle}>
          No chains required.
        </LightText>
      </View>
    );
  }

  return (
    <View style={styles.chainsContainer}>
      <BoldText style={styles.chainsTitle}>Chains</BoldText>
      <View style={styles.chainStatusContainer}>
        {r1Row}
        {r2Row}
        {noChainRow}
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

export default connect(null, mapDispatchToProps)(Chains);

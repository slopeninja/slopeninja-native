import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

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

const Chains = ({ roads }) => {
  const R1Highways = roads.filter(key => key.chainStatus === 'R1');
  const R2Highways = roads.filter(key => key.chainStatus === 'R2');

  const r1HighwayIcons = R1Highways.map(
    key => (
      <View
        style={styles.highwayIconContainer}
        key={key.number}
      >
        <HighwayIcon
          highwayNumber={key.number}
          width={36}
          height={36}
        />
      </View>
    ),
  );
  const r2HighwayIcons = R2Highways.map(
    key => (
      <View
        style={styles.highwayIconContainer}
        key={key.number}
      >
        <HighwayIcon
          highwayNumber={key.number}
          width={36}
          height={36}
        />
      </View>
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

export default Chains;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import HighwayIcon from '../HighwayIcons/HighwayIcon';
import AdaptiveText from '../AdaptiveText/AdaptiveText';

const styles = StyleSheet.create({
  chainsContainer: {
    height: 180,
    flexDirection: 'column',
    flex: 1,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EDEDED',
    justifyContent: 'space-around'
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
    flexDirection: 'row'
  },
  chainsTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  chainsContent: {
    fontSize: 24,
    fontWeight: '200',
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: '100',
  },
  highwayIconContainer: {
    marginRight: 6,
    marginLeft: 6,
    flexDirection: 'row'
  }
});

const Chains = (props) => (
  <View style={styles.chainsContainer}>
    <AdaptiveText style={styles.chainsTitle}>Chains</AdaptiveText>
    <View style={styles.chainStatusContainer}>
      <View style={styles.chainsConditionContainer}>
        <View style={styles.chainStatusTitleContainer}>
          <AdaptiveText style={styles.statusTitle}>R1</AdaptiveText>
        </View>
        <View style={styles.highwayIconContainer}>
          <HighwayIcon highwayNumber='88' width={36} height={36}/>
        </View>
      </View>
      <View style={styles.chainsConditionContainer}>
        <View style={styles.chainStatusTitleContainer}>
          <AdaptiveText style={styles.statusTitle}>R2</AdaptiveText>
        </View>
        <View style={styles.highwayIconContainer}>
          <HighwayIcon highwayNumber='89' width={36} height={36}/>
        </View>
        <View style={styles.highwayIconContainer}>
          <HighwayIcon highwayNumber='580' width={36} height={36}/>
        </View>
      </View>
    </View>

  </View>
)

export default Chains;

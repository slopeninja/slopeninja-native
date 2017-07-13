import React from 'react';
import {
  StyleSheet,
  View,
  Text,
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
  },
  statusTitle: {
    fontSize: 24,
  },
  highwayIconContainer: {
    marginRight: 6,
    marginLeft: 6,
    flexDirection: 'row'
  }
});

const Chains = (props) => (
  <View style={styles.chainsContainer}>
    <BoldText style={styles.chainsTitle}>Chains</BoldText>
    <View style={styles.chainStatusContainer}>
      <View style={styles.chainsConditionContainer}>
        <View style={styles.chainStatusTitleContainer}>
          <LightText style={styles.statusTitle}>R1</LightText>
        </View>
        <View style={styles.highwayIconContainer}>
          <HighwayIcon highwayNumber='88' width={36} height={36}/>
        </View>
      </View>
      <View style={styles.chainsConditionContainer}>
        <View style={styles.chainStatusTitleContainer}>
          <LightText style={styles.statusTitle}>R2</LightText>
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

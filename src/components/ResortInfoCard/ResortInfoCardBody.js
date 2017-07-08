import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  ScrollView
} from 'react-native';

import SnowInfo from './SnowInfo';
import OpenRoutes from './OpenRoutes';
import Chains from './Chains';
import ProgressBars from './ProgressBars';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ResortInfoCardContentBody: {
    width: DEVICE_WIDTH,
    // backgroundColor: 'orange',
  },
  resortInfoBodyRow: {
    flexDirection: 'row',
    // height: 120,
  }
});

const ResortInfoCardContentBody = () => {
  return (
    <ScrollView style={styles.ResortInfoCardContentBody}>
      <View style={styles.resortInfoBodyRow}>
        <SnowInfo title='Temperature' value='123' />
        <SnowInfo title='Base Condition' value='123' />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <SnowInfo title='New Snow' value='123' />
        <SnowInfo title='Snow Depth' value='123' />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <OpenRoutes />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <Chains />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <ProgressBars />
      </View>
    </ScrollView>
  );
};

export default ResortInfoCardContentBody;

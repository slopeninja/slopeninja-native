import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text
} from 'react-native';

import AdaptiveText from '../AdaptiveText/AdaptiveText';

const DEVICE_WIDTH = Dimensions.get('window').width;

import SunnyIcon from './SunnyIcon';

const styles = StyleSheet.create({
  ResortInfoCardContentHeader: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#EDEDED',
    height: 204,
    width: DEVICE_WIDTH,
  },
  resortDescription: {
    flex: 1,
  },
  resortInfo: {
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    marginLeft: 18,
    marginTop: 18,
    height: 50,
    alignItems: 'center',
  },
  resortStatus: {
    // backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '100%',
    backgroundColor: 'grey',
    height: 50,
    width: 50,
  },
  resortName: {
    marginLeft: 18,
    fontSize: 32,
    fontWeight: '500',
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: '200',
    marginLeft: 90,
  },
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 32,
    fontWeight: '100',
  },
});

const ResortInfoCardContentHeader = () => {
  return (
    <View style={styles.ResortInfoCardContentHeader}>
      <View style={styles.resortDescription}>
        <View style={styles.resortInfo}>
          <Image style={styles.image}></Image>
          <AdaptiveText style={styles.resortName}>Squaw Valley</AdaptiveText>
        </View>
        <AdaptiveText style={styles.statusTitle}>Today’s Forecast</AdaptiveText>
      </View>
      <View style={styles.resortStatus}>
        <View style={styles.statusContainer}>
          <AdaptiveText style={styles.statusText}>Open</AdaptiveText>
        </View>
        <View style={styles.statusContainer}>
          <SunnyIcon />
        </View>
      </View>
    </View>
  );
};

export default ResortInfoCardContentHeader;

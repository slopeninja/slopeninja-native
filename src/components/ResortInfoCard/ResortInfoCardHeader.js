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

import SunnyIcon from './WeatherIcons/SunnyIcon';
import CloudyIcon from './WeatherIcons/CloudyIcon';
import RainIcon from './WeatherIcons/RainIcon';
import SnowIcon from './WeatherIcons/SnowIcon';
import ThunderStormIcon from './WeatherIcons/ThunderStormIcon';

import SierraLogo from '../ResortLogos/SierraLogo';
import SquawLogo from '../ResortLogos/SquawLogo';
import BorealLogo from '../ResortLogos/BorealLogo';
import HeavenlyLogo from '../ResortLogos/HeavenlyLogo';
import DiamondLogo from '../ResortLogos/DiamondLogo';
import DonnerLogo from '../ResortLogos/DonnerLogo';
import KirkwoodLogo from '../ResortLogos/KirkwoodLogo';
import NorthstarLogo from '../ResortLogos/NorthstarLogo';
import HomewoodLogo from '../ResortLogos/HomewoodLogo';
import MtRoseLogo from '../ResortLogos/MtRoseLogo';
import SugarLogo from '../ResortLogos/SugarLogo';


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
  resortName: {
    marginLeft: 18,
    fontSize: 32,
    fontWeight: '500',
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: '200',
    marginLeft: 100,
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
          <DiamondLogo />
          <AdaptiveText style={styles.resortName}>Squaw Valley</AdaptiveText>
        </View>
        <AdaptiveText style={styles.statusTitle}>Today’s Forecast</AdaptiveText>
      </View>
      <View style={styles.resortStatus}>
        <View style={styles.statusContainer}>
          <AdaptiveText style={styles.statusText}>Open</AdaptiveText>
        </View>
        <View style={styles.statusContainer}>
          <ThunderStormIcon />
        </View>
      </View>
    </View>
  );
};

export default ResortInfoCardContentHeader;

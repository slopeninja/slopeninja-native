import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text
} from 'react-native';

import BoldText from '../AdaptiveText/BoldText';
import LightText from '../AdaptiveText/LightText';

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
  },
  statusTitle: {
    fontSize: 24,
    marginLeft: 100,
  },
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 32,
  },
});

const ResortInfoCardContentHeader = () => {
  return (
    <View style={styles.ResortInfoCardContentHeader}>
      <View style={styles.resortDescription}>
        <View style={styles.resortInfo}>
          <DiamondLogo />
          <BoldText style={styles.resortName}>Squaw Valley</BoldText>
        </View>
        <LightText style={styles.statusTitle}>Today’s Forecast</LightText>
      </View>
      <View style={styles.resortStatus}>
        <View style={styles.statusContainer}>
          <LightText style={styles.statusText}>Open</LightText>
        </View>
        <View style={styles.statusContainer}>
          <ThunderStormIcon />
        </View>
      </View>
    </View>
  );
};

export default ResortInfoCardContentHeader;

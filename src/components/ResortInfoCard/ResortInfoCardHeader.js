import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import BoldText from '../AdaptiveText/BoldText';
import LightText from '../AdaptiveText/LightText';

import SunnyIcon from './WeatherIcons/SunnyIcon';
import CloudyIcon from './WeatherIcons/CloudyIcon';
import RainIcon from './WeatherIcons/RainIcon';
import SnowIcon from './WeatherIcons/SnowIcon';
import ThunderStormIcon from './WeatherIcons/ThunderStormIcon';
import SleetIcon from './WeatherIcons/SleetIcon';

import { resortLogos } from '../SlideBar/ResortNavCard';


const weatherIcons = {
  sunny: SunnyIcon,
  clear: SunnyIcon,
  cloudy: CloudyIcon,
  rain: RainIcon,
  snow: SnowIcon,
  thunderstorm: ThunderStormIcon,
  sleet: SleetIcon,
};

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ResortInfoCardContentHeader: {
    borderBottomWidth: 1,
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

const ResortInfoCardContentHeader = ({ resort }) => {
  const ResortLogo = resortLogos[resort.shortName];
  const condition = resort.weather.condition || 'clear';
  const WeatherIcon = weatherIcons[condition];

  return (
    <View style={styles.ResortInfoCardContentHeader}>
      <View style={styles.resortDescription}>
        <View style={styles.resortInfo}>
          <ResortLogo />
          <BoldText style={styles.resortName}>{resort.name}</BoldText>
        </View>
        <LightText style={styles.statusTitle}>Today’s Forecast</LightText>
      </View>
      <View style={styles.resortStatus}>
        <View style={styles.statusContainer}>
          <LightText style={styles.statusText}>{resort.status === 'open' ? 'Open' : 'Closed'}</LightText>
        </View>
        <View style={styles.statusContainer}>
          <Animatable.View
            iterationCount="infinite"
            animation={{
              from: { translateY: -4 },
              to: { translateY: 2 },
            }}
            direction="alternate"
            easing="ease-in-out-quad"
          >

            <WeatherIcon />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

export default ResortInfoCardContentHeader;

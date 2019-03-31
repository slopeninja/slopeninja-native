import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import BoldText from '../AdaptiveText/BoldText';
import LightText from '../AdaptiveText/LightText';

import ClearDayIcon from './WeatherIcons/ClearDayIcon';
import ClearNightIcon from './WeatherIcons/ClearNightIcon';
import RainIcon from './WeatherIcons/RainIcon';
import SnowIcon from './WeatherIcons/SnowIcon';
import SleetIcon from './WeatherIcons/SleetIcon';
import WindIcon from './WeatherIcons/WindIcon';
import FogIcon from './WeatherIcons/FogIcon';
import CloudyIcon from './WeatherIcons/CloudyIcon';
import PartlyCloudyDayIcon from './WeatherIcons/PartlyCloudyDayIcon';
import PartlyCloudyNightIcon from './WeatherIcons/PartlyCloudyNightIcon';
import HailIcon from './WeatherIcons/HailIcon';
import ThunderStormIcon from './WeatherIcons/ThunderStormIcon';
import TornadoIcon from './WeatherIcons/TornadoIcon';

import { resortLogos } from '../SlideBar/ResortNavCard';

const weatherIcons = {
  'clear-day': ClearDayIcon,
  'clear-night': ClearNightIcon,
  rain: RainIcon,
  snow: SnowIcon,
  sleet: SleetIcon,
  wind: WindIcon,
  fog: FogIcon,
  cloudy: CloudyIcon,
  'partly-cloudy-day': PartlyCloudyDayIcon,
  'partly-cloudy-night': PartlyCloudyNightIcon,
  hail: HailIcon,
  thunderstorm: ThunderStormIcon,
  tornado: TornadoIcon,
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
  const condition = resort.weather.condition;
  const WeatherIcon = weatherIcons[condition] || weatherIcons.cloudy;

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

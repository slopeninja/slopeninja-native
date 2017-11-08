import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  Linking,
  Platform,
} from 'react-native';
import {
  connectActionSheet,
} from '@expo/react-native-action-sheet';

import { MapView } from 'expo';

import SnowInfo from './SnowInfo';
import OpenRoutes from './OpenRoutes';
import Chains from './Chains';
import ProgressBars from './ProgressBars';

import mapTheme from './mapTheme';

const WINDOW = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

const LAKE_TAHOE_COORDS = {
  lat: 39.0898559,
  lng: -120.014292,
};

const styles = StyleSheet.create({
  ResortInfoCardContentBody: {
    flex: 1,
  },
  resortInfoBodyRow: {
    flexDirection: 'row',
    width: WINDOW.WIDTH,
  },
  mapContainer: {
    width: WINDOW.WIDTH / 2,
    // marginLeft: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EDEDED',
    backgroundColor: '#FFFFFF',
  },
});

const openInMap = (showActionSheetWithOptions, name) => {
  const link = {
    'Google Maps': `https://www.google.com/maps/search/?api=1&query=${name}+Ski+Resort`,
    'Apple Maps': `http://maps.apple.com/?q=${name}+Ski+Resort`,
  };

  if (Platform.OS !== 'ios') {
    Linking.openURL(link['Google Maps']).catch(() => {});
    return;
  }

  const options = ['Google Maps', 'Apple Maps', 'Cancel'];
  const cancelButtonIndex = 2;

  showActionSheetWithOptions({
    options,
    cancelButtonIndex,
  },
  (buttonIndex) => {
    const url = link[options[buttonIndex]];
    if (url) {
      Linking.openURL(url).catch(() => {});
    }
  });
};

const ResortInfoCardContentBody = ({ resort, showActionSheetWithOptions }) => {
  const temperature = resort.weather.temperature !== null ? `${resort.weather.temperature}"` : '-';
  // const base = resort.weather.base !== null ? `${resort.weather.base}"` : '-';
  const snowDepth = resort.weather.snowDepth !== null ? `${resort.weather.snowDepth}"` : '-';
  const newSnow = resort.weather.newSnow !== null ? `${resort.weather.newSnow}"` : '-';

  return (
    <View style={styles.ResortInfoCardContentBody}>
      <View style={styles.resortInfoBodyRow}>
        <View style={styles.mapContainer}>
          <TouchableHighlight
            style={{ flex: 1 }}
            onPress={() => openInMap(showActionSheetWithOptions, resort.name)}
          >
            <View style={{ flex: 1 }}>
              <MapView
                customMapStyle={mapTheme}
                provider={MapView.PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                scrollEnabled={false}
                pitchEnabled={false}
                zoomEnabled={false}
                initialRegion={{
                  latitude: LAKE_TAHOE_COORDS.lat,
                  longitude: LAKE_TAHOE_COORDS.lng,
                  latitudeDelta: 0.3,
                  longitudeDelta: 0.3,
                }}
                region={{
                  latitude: resort.coords.lat,
                  longitude: resort.coords.lng,
                  latitudeDelta: 0.03,
                  longitudeDelta: 0.03,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
        <SnowInfo title="Temperature" value={temperature} />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <SnowInfo title="New Snow" value={newSnow} />
        <SnowInfo title="Snow Depth" value={snowDepth} />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <OpenRoutes roads={resort.roads} />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <Chains roads={resort.roads} />
      </View>
      <View style={styles.resortInfoBodyRow}>
        <ProgressBars liftCounts={resort.liftCounts} trailCounts={resort.trailCounts} />
      </View>
    </View>
  );
};

const ResortInfoCardContentBodyWithActionSheet = connectActionSheet(ResortInfoCardContentBody);

export default ResortInfoCardContentBodyWithActionSheet;

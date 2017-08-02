import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import SnowInfo from './SnowInfo';
import OpenRoutes from './OpenRoutes';
import Chains from './Chains';
import ProgressBars from './ProgressBars';

const styles = StyleSheet.create({
  ResortInfoCardContentBody: {
    flex: 1,
  },
  resortInfoBodyRow: {
    flexDirection: 'row',
  },
});

const ResortInfoCardContentBody = ({ resort }) => {
  const temperature = resort.weather.temperature !== null ? `${resort.weather.temperature}"` : '-';
  const base = resort.weather.base !== null ? `${resort.weather.base}"` : '-';
  const snowDepth = resort.weather.snowDepth !== null ? `${resort.weather.snowDepth}"` : '-';
  const newSnow = resort.weather.newSnow !== null ? `${resort.weather.newSnow}"` : '-';

  return (
    <View style={styles.ResortInfoCardContentBody}>
      <View style={styles.resortInfoBodyRow}>
        <SnowInfo title="Temperature" value={temperature} />
        <SnowInfo title="Base Condition" value={base} />
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

export default ResortInfoCardContentBody;

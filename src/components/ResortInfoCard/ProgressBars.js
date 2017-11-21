import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ProgressBar from '../ProgressBar/ProgressBar';
import BoldText from '../AdaptiveText/BoldText';
import LightText from '../AdaptiveText/LightText';

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 180,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EDEDED',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  processBarDescription: {
    fontSize: 24,
    marginBottom: 18,
  },
  processBarStats: {
    fontSize: 24,
    fontWeight: '100',
    marginBottom: 18,
  },
});

const ProgressBars = ({ liftCounts, trailCounts }) => {
  let liftsProgress;
  let trailsProgress;

  let liftData = '-';
  if (liftCounts.open !== null && liftCounts.total !== null) {
    liftData = `${liftCounts.open} / ${liftCounts.total}`;
    liftsProgress = Math.ceil(
      (liftCounts.open / liftCounts.total) * 100,
    );
  }

  let trailData = '-';
  if (trailCounts.open !== null && trailCounts.total !== null) {
    trailData = `${trailCounts.open} / ${trailCounts.total}`;
    trailsProgress = Math.ceil(
      (trailCounts.open / trailCounts.total) * 100,
    );
  }

  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarInfo}>
        <BoldText style={styles.processBarDescription}>Open Lifts</BoldText>
        <LightText style={styles.processBarStats}>{liftData}</LightText>
        <ProgressBar small={false} progress={liftsProgress} />
      </View>
      <View style={styles.progressBarInfo}>
        <BoldText style={styles.processBarDescription}>Open Trails</BoldText>
        <LightText style={styles.processBarStats}>{trailData}</LightText>
        <ProgressBar small={false} progress={trailsProgress} />
      </View>
    </View>
  );
};

export default ProgressBars;

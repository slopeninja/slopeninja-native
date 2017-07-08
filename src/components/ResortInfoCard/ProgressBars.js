import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

import ProgressBar from '../ProgressBar/ProgressBar';
import AdaptiveText from '../AdaptiveText/AdaptiveText';

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
  processBarDescriptiion: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 18,
  },
  processBarStats: {
    fontSize: 24,
    fontWeight: '100',
    marginBottom: 18,
  }
});

const ProgressBars = ({ style }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarInfo}>
        <AdaptiveText style={styles.processBarDescriptiion}>Open Lifts</AdaptiveText>
        <AdaptiveText style={styles.processBarStats}>16</AdaptiveText>
        <ProgressBar small={false} progress={100} />
      </View>
      <View style={styles.progressBarInfo}>
        <AdaptiveText style={styles.processBarDescriptiion}>Open Trails</AdaptiveText>
        <AdaptiveText style={styles.processBarStats}>30</AdaptiveText>
        <ProgressBar small={false} progress={15} />
      </View>
    </View>
  );
};

export default ProgressBars;

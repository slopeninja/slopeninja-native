import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ResortInfoCardHeader from './ResortInfoCardHeader';
import ResortInfoCardBody from './ResortInfoCardBody';

const styles = StyleSheet.create({
  resortInfoCard: {
    flex: 1,
  },
});

const ResortInfoCard = ({ resort }) => (
  <View
    style={styles.resortInfoCard}
  >
    <ResortInfoCardHeader resort={resort} />
    <ResortInfoCardBody
      resort={resort}
    />
  </View>
);

export default ResortInfoCard;

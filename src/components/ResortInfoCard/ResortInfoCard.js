import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';

import ResortInfoCardHeader from './ResortInfoCardHeader';
import ResortInfoCardBody from './ResortInfoCardBody';


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  resortInfoCard: {
    // backgroundColor: 'red',
    width: DEVICE_WIDTH,
  },
});

const ResortInfoCard = () => {
  return (
    <ScrollView style={styles.resortInfoCard}>
      <ResortInfoCardHeader />
      <ResortInfoCardBody />
    </ScrollView>
  );
};

export default ResortInfoCard;

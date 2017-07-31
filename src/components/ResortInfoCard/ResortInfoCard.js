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

const ResortInfoCard = ({ resort }) => {
  return (
    <ScrollView style={styles.resortInfoCard}>
      <ResortInfoCardHeader resort={resort}/>
      <ResortInfoCardBody
        resort={resort}
      />
    </ScrollView>
  );
};

export default ResortInfoCard;

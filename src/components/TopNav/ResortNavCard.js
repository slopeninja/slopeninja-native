import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

import ProgressBar from '../ProgressBar/ProgressBar';
import LightText from '../AdaptiveText/LightText';

const styles = StyleSheet.create({
  resortNavCard: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#EDEDED',
    height: 136,
    width: 324,
    flexDirection: 'row',
  },
  resortLogoContainer: {
    marginTop: 18,
    marginLeft: 18,
    height: 60,
    width: 60,
  },
  image:{
    width: '100%',
    backgroundColor: 'grey',
    height: 60,
    width: 60,
  },
  resortInfoContainer: {
    margin: 18,
    marginBottom: 10,
    flex: 1,
  },
  resortTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  resortName: {
    fontSize: 24,
  },
  resortSubText: {
    color: '#9B9B9B',
    fontSize: 16,
  },
  progressBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarInfo: {
    flex: 1,
  },
  processBarDescriptiion: {
    fontSize: 16,
    marginBottom: 10,
  }
});

const ResortNavCard = ({ style }) => {
  return (
    <View style={style}>
      <TouchableHighlight>
        <View style={styles.resortNavCard}>
          <View style={styles.resortLogoContainer}>
            <Image style={styles.image}></Image>
          </View>
          <View style={styles.resortInfoContainer}>
            <View style={styles.resortTitleContainer}>
              <LightText style={styles.resortName}>Blah Blah</LightText>
              <LightText style={styles.resortSubText}>Hello, CA</LightText>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarInfo}>
                <LightText style={styles.processBarDescriptiion}>Open Lifts</LightText>
                <ProgressBar small progress={15} />
              </View>
              <View style={styles.progressBarInfo}>
                <LightText style={styles.processBarDescriptiion}>Open Trails</LightText>
                <ProgressBar small progress={15} />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ResortNavCard;

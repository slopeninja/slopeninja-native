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
    height: 50,
    width: 50,
  },
  image:{
    width: '100%',
    backgroundColor: 'grey',
    height: 50,
    width: 50,
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
    fontWeight: '200',
  },
  resortSubText: {
    color: '#9B9B9B',
    fontSize: 16,
    fontWeight: '200',
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
    fontWeight: '200',
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
              <AdaptiveText style={styles.resortName}>Blah Blah</AdaptiveText>
              <AdaptiveText style={styles.resortSubText}>Hello, CA</AdaptiveText>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarInfo}>
                <AdaptiveText style={styles.processBarDescriptiion}>Open Lifts</AdaptiveText>
                <ProgressBar small progress={15} />
              </View>
              <View style={styles.progressBarInfo}>
                <AdaptiveText style={styles.processBarDescriptiion}>Open Trails</AdaptiveText>
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

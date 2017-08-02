import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  progressBarBox: {
    borderWidth: 1,
    borderColor: '#4A4A4A',
    padding: 1,
  },
  progressBarBoxSmall: {
    width: 78,
    height: 14,
  },
  progressBarBoxRegular: {
    width: 122,
    height: 22,
  },
  progressBox: {
    height: '100%',
    backgroundColor: '#4A4A4A',
  },
});

const ProgressBar = ({ small = false, progress = 0 }) => {
  const progressBarSizeStyle = small ? styles.progressBarBoxSmall : styles.progressBarBoxRegular;

  const widthStyle = {
    width: `${progress}%`,
  };

  return (
    <View style={[styles.progressBarBox, progressBarSizeStyle]}>
      <View
        style={[styles.progressBox, widthStyle]}
      />
    </View>
  );
};

export default ProgressBar;

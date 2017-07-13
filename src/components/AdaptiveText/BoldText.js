import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import AdaptiveText from './AdaptiveText';

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'Lato Bold',
    color: '#4A4A4A',
  },
});

const BoldText = ({ style, children, ...rest }) => (
  <AdaptiveText
    style={[styles.boldText, style]}
    {...rest}
  >
    {children}
  </AdaptiveText>
);

export default BoldText;

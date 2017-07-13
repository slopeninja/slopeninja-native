import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import AdaptiveText from './AdaptiveText';

const styles = StyleSheet.create({
  lightText: {
    fontFamily: 'Lato Light',
    color: '#4A4A4A',
  },
});

const LightText = ({ style, children, ...rest }) => (
  <AdaptiveText
    style={[styles.lightText, style]}
    {...rest}
  >
    {children}
  </AdaptiveText>
);

export default LightText;

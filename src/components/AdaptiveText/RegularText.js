import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import AdaptiveText from './AdaptiveText';

const styles = StyleSheet.create({
  regularText: {
    fontFamily: 'Lato Regular',
    color: '#4A4A4A',
  },
});

const RegularText = ({ style, children, ...rest }) => (
  <AdaptiveText
    style={[styles.regularText, style]}
    {...rest}
  >
    {children}
  </AdaptiveText>
);

export default RegularText;

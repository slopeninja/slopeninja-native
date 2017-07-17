import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  Path,
} = Svg;

const SearchIcon = ({ width = 30, height = 30 }) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16">
      <Path d="M11.184 9.948c.097.045.188.108.268.188l4.276 4.275c.364.365.364.956 0 1.32-.364.364-.955.364-1.32 0l-4.274-4.276c-.08-.08-.143-.17-.188-.268-1.04.782-2.33 1.245-3.73 1.245C2.78 12.43 0 9.65 0 6.216 0 2.783 2.782 0 6.215 0c3.432 0 6.214 2.783 6.214 6.215 0 1.4-.464 2.694-1.246 3.733zm-4.97 1.24c2.746 0 4.972-2.226 4.972-4.973 0-2.746-2.226-4.972-4.97-4.972-2.747 0-4.973 2.226-4.973 4.972 0 2.747 2.226 4.973 4.972 4.973z" fill="#FFF" fill-rule="evenodd"/>
    </Svg>
  );
}

export default SearchIcon;

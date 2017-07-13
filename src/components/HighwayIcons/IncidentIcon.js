import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  G,
  Path,
} = Svg;

const IncidentIcon = ({ width = 20, height = 20 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 112 99">
      <G fillRule="nonzero" fill="none">
       <Path
         stroke="#FFAA5C"
         strokeWidth="12"
         fill="#FFAA5C"
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M56 6L6 92.6h100z"
       />
       <Path
         d="M62.61 33l-2 36.27h-9.25L49.39 33h13.22zm-1 44.74v9.64H50.38v-9.66l11.23.02z"
         fill="#FFF"
       />
     </G>
    </Svg>
  );
}

export default IncidentIcon;

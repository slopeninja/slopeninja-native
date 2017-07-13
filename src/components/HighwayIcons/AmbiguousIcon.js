import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  G,
  Path,
  Circle
} = Svg;

const AmbiguousIcon = ({ width = 20, height = 20 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      <G fillRule="nonzero" fill="none">
        <Circle fill="#FF5397" cx="50" cy="50" r="50" />
        <Path
          stroke="#FFFDFD"
          fill="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M44.38 67.79h11.25v9.64H44.38z"
        />
        <Path
          d="M39.57 25.15c2.954-1.793 6.366-2.686 9.82-2.57 5.1 0 9.34 1.22 12.72 3.66 3.38 2.44 5.067 6.053 5.06 10.84.09 2.636-.67 5.23-2.17 7.4-1.447 1.78-3.13 3.354-5 4.68L57.65 51c-1.236.887-2.163 2.14-2.65 3.58-.326 1.308-.474 2.653-.44 4h-9.13c.133-3.813.493-6.45 1.08-7.91.587-1.46 2.097-3.127 4.53-5l2.46-1.97c.77-.553 1.447-1.23 2-2 .88-1.185 1.354-2.623 1.35-4.1.01-1.683-.516-3.325-1.5-4.69-1.033-1.407-2.88-2.11-5.54-2.11s-4.513.87-5.56 2.61c-1.054 1.613-1.623 3.494-1.64 5.42h-9.78c.273-6.433 2.52-10.993 6.74-13.68z"
          stroke="#FFF"
          strokeWidth="2"
          fill="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default AmbiguousIcon;

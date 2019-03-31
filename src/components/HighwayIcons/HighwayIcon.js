import React from 'react';
import {
  Platform,
} from 'react-native';
import { Svg } from 'expo';

const {
  G,
  Path,
  Text,
} = Svg;

const HighwayIcon = ({ highwayNumber = '00', width = 54, height = 54 }) => {
  let fontSize = 28;
  let fontWeight = '400';
  let translateX = Platform.OS === 'ios' ? 10 : 11;
  let translateY = 36;

  if (highwayNumber.length > 2) {
    fontSize = 20;
    fontWeight = '600';
    translateX = Platform.OS === 'ios' ? 8 : 10;
    translateY = 33;
  }

  return (
    <Svg width={width} height={height} viewBox={'0 0 54 54'}>
      <G fill="none" fillRule="evenodd">
        <Path d="M3.458 10.73C5.47 14.2 6.28 17.913 5.626 21.97c-.394 2.442-1.662 4.483-2.56 6.696-3.117 7.676.815 16.47 9.014 18.526 4.814 1.207 9.78 1.804 14.282 4.17.522.273.95.212 1.375-.03 3.797-2.155 8.005-2.834 12.15-3.677 4.223-.858 7.853-2.597 10.18-6.62 2.536-4.388 2.488-8.887.374-13.39-1.26-2.69-2.44-5.348-2.35-8.462.09-3.158 1.005-6.004 2.347-8.248-2.526-2.947-4.96-5.814-7.432-8.644-.437-.5-1.052-.256-1.552-.004-4.51 2.273-9.006 2.223-13.524.01-.53-.257-1.13-.33-1.762-.03-4.492 2.127-8.99 2.393-13.52.046-.483-.25-1.123-.524-1.77.15-2.524 2.637-5.323 4.99-7.42 8.063" stroke="#4A4A4A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <Text
          x={translateX}
          y={translateY}
          fontSize={fontSize}
          fontFamily="Lato"
          fill="#4A4A4A"
          fontWeight={fontWeight}
        >
          { highwayNumber }
        </Text>
      </G>
    </Svg>
  );
};

export default HighwayIcon;

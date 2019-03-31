import React from 'react';
import { Svg } from 'expo';

const { G, Path } = Svg;

const PartlyCloudyNightIcon = ({ width = 60, height = 60 }) => (
  <Svg width={width} height={height} viewBox="0 0 100 100">
    <G fill="none" fill-rule="evenodd">
      <Path
        d="M21.528 2.393c-3.43 13.83-8.626 54.69 44.99 53.693 1.452-.027 2.332 1.586 1.49 2.779-3.665 5.185-13.635 15.171-35.286 13.333 0 0-31.108-3.871-32.45-39.15 0 0-1.25-20.557 18.448-32.736 1.436-.887 3.217.436 2.808 2.08"
        fill="#ADC1E3"
      />
      <Path
        d="M18.84 37.234c.45 3.789-2.237 7.224-5.996 7.676-3.762.452-7.174-2.254-7.62-6.04-.45-3.788 2.235-7.226 5.996-7.676 3.761-.452 7.172 2.252 7.62 6.04M28.052 57.446c.34 2.863-1.69 5.46-4.534 5.801-2.843.342-5.42-1.703-5.76-4.566-.34-2.864 1.69-5.46 4.534-5.802 2.843-.342 5.42 1.703 5.76 4.567M38.288 57.09c.282 2.388-1.411 4.555-3.78 4.838-2.373.286-4.524-1.42-4.805-3.808-.284-2.387 1.41-4.556 3.781-4.84 2.37-.285 4.52 1.42 4.804 3.81M55.298 61.573c.212 1.8-1.063 3.433-2.85 3.65-1.787.213-3.408-1.074-3.623-2.873-.212-1.8 1.064-3.433 2.85-3.647 1.79-.216 3.41 1.07 3.623 2.87M17.389 22.929c.212 1.8-1.064 3.433-2.85 3.649-1.787.213-3.409-1.073-3.623-2.873-.212-1.8 1.063-3.433 2.85-3.647 1.789-.216 3.41 1.071 3.623 2.87"
        fill="#8AA1C4"
      />
      <Path
        d="M17.373 48.784c-7.105 0-12.887 5.88-12.887 13.111 0 7.226 5.782 13.109 12.887 13.109h56.03c8.921 0 16.175-7.384 16.175-16.459 0-9.074-7.254-16.458-16.174-16.458-1.66 0-3.31.261-4.9.772l-1.037.335-.366-1.044c-3.424-9.795-12.577-16.375-22.773-16.375-12.465 0-22.81 9.503-24.065 22.103l-.116 1.167-1.144-.144a12.741 12.741 0 0 0-1.63-.117"
        fill="#D6E3F2"
      />
    </G>
  </Svg>
);

export default PartlyCloudyNightIcon;

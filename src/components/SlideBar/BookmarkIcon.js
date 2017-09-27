import React from 'react';
import { Svg } from 'expo';

const {
  Path,
  G,
} = Svg;

const BookmarkIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="20">
    <G fill="none" fill-rule="evenodd">
      <Path d="M-5-2h24v24H-5" />
      <Path fill="#FFAA5C" d="M12 0H2C.9 0 .01 1 .01 2.222L0 20l7-3.333L14 20V2.222C14 1 13.1 0 12 0z"/>
    </G>
  </Svg>
);

export default BookmarkIcon;

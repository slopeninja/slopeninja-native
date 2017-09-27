import React from 'react';
import { Svg } from 'expo';

const {
  Path,
  G,
} = Svg;

const BookmarkStrokeIcon = () => (
  <Svg width="14" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
    <G fill="none" fillRule="evenodd">
      <Path d="M-5-2h24v24H-5" />
      <Path fill="#EDEDED" d="M12 0H2C.9 0 .01 1 .01 2.222L0 20l7-3.333L14 20V2.222C14 1 13.1 0 12 0zm0 16.667l-5-2.423-5 2.423V2.222h10v14.445z"/>
    </G>
  </Svg>
);

export default BookmarkStrokeIcon;

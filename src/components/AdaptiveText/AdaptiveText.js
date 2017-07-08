import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const DEVELOPMENT_VIEWPORT_WIDTH = 414;
const CANONICAL_FONT_SIZE = 14;

const WINDOW = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

class AdaptiveText extends React.Component {
  static defaultProps = {
    adaptFontSize: true,
  };

  // react-native/issues/97
  setNativeProps(nativeProps) {
    this.textRef.setNativeProps(nativeProps);
  }

  render() {
    const {
      style,
      children,
      adaptFontSize,
      ...rest
    } = this.props;

    let canonicalFontSize = CANONICAL_FONT_SIZE;

    if (style) {
      const size = StyleSheet.flatten(style).fontSize;
      if (size) {
        canonicalFontSize = size;
      }
    }

    let fontSize = canonicalFontSize;

    if (adaptFontSize) {
      fontSize = Math.round(
        (canonicalFontSize * WINDOW.WIDTH) / DEVELOPMENT_VIEWPORT_WIDTH,
      );
    }

    return (
      <Text
        ref={(component) => { this.textRef = component; }}
        style={[style, { fontSize }]}
        allowFontScaling={false}
        {...rest}
      >
        {children}
      </Text>
    );
  }
}

export default AdaptiveText;

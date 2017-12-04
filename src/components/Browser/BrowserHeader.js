import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableHighlight,
} from 'react-native';

import BoldText from '../AdaptiveText/BoldText';

import StatusBar from '../StatusBar/StatusBar';
import CancelIcon from './CancelIcon';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1ED2FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
  },
  titleContainer: {
    flex: 1,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

class BrowserHeader extends Component {
  render() {
    const title = this.props.scene.route.params.title;

    return (
      <View>
        <StatusBar
          backgroundColor="#1ED2FF"
          barStyle="light-content"
        />
        <View style={styles.container}>
          <TouchableHighlight
            hitSlop={{ top: 30, left: 30, bottom: 30, right: 30 }}
            underlayColor="transparent"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <View>
              <CancelIcon />
            </View>
          </TouchableHighlight>
          <View style={styles.titleContainer}>
            <BoldText style={styles.title}>
              {title}
            </BoldText>
          </View>
        </View>
      </View>
    );
  }
}

export default BrowserHeader;

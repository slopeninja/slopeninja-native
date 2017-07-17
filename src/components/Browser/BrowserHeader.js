import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import StatusBar from '../StatusBar/StatusBar';
import CancelIcon from './CancelIcon';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1ED2FF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12
  },
});

class BrowserHeader extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="#1ED2FF"
          barStyle="light-content"
        />
        <View style={styles.container}>

        <TouchableHighlight
          underlayColor='transparent'
          onPress={()=> {
            this.props.navigation.goBack();
          }}
        >
          <View>
            <CancelIcon />
          </View>
        </TouchableHighlight>

        </View>
      </View>
    )
  }
}

export default BrowserHeader;

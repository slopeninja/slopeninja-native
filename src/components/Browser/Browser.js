import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import BrowserHeader from './BrowserHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

class Browser extends Component {
  render() {
    return (
      <View style = {styles.container}>

      </View>
    )
  }
}

Browser.navigationOptions = {
  title: 'Browser',
  header: (headerProps) => (
    <BrowserHeader {...headerProps} />
  ),
};

export default Browser;

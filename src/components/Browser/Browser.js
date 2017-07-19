import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import BrowserHeader from './BrowserHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

class Browser extends Component {
  render() {
    const url = this.props.navigation.state.params.url;

    return (
      <View style = {styles.container}>
        <WebView
          style={{
            flex: 1,
          }}
          source={{uri: url}}
        />
      </View>
    )
  }
}

Browser.navigationOptions = {
  title: 'Browser',
  header: (headerProps) => (
    <BrowserHeader {...headerProps} />
  ),
  gesturesEnabled: false,
};

export default Browser;

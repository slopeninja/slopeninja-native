import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
} from 'react-native';

import BrowserHeader from './BrowserHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

const Browser = (props) => {
  const url = props.navigation.state.params.url;

  return (
    <View style={styles.container}>
      <WebView
        style={{
          flex: 1,
        }}
        source={{ uri: url }}
      />
    </View>
  );
};

Browser.navigationOptions = {
  title: 'Browser',
  header: headerProps => (
    <BrowserHeader {...headerProps} />
  ),
  gesturesEnabled: false,
};

export default Browser;

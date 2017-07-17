import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';

import ResortNavCard from './ResortNavCard';

const TOP_NAV_HEIGHT = 136 + (18 * 2);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewWrapper: {
    paddingTop: 18,
    paddingBottom: 18,
    height: TOP_NAV_HEIGHT,
    backgroundColor: '#F5F5F5',
  }
});

const SlideBar = (props) => {
  return (
    <View style={styles.scrollViewWrapper}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
      >
        <ResortNavCard
          style={{ marginLeft: 18 }}
        />
        <ResortNavCard style={{ marginLeft: 18 }} />
        <ResortNavCard style={{ marginLeft: 18 }} />
        <ResortNavCard style={{ marginLeft: 18 }} />
      </ScrollView>
    </View>
  );
};

export default SlideBar;

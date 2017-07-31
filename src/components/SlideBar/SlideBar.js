import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
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
  },
});

const SlideBar = ({ resorts, onResortClick }) => {
  resorts.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const sideNavContent = resorts.map(resort => (
    <ResortNavCard
      key={resort.shortName}
      resort={resort}
      style={{ marginLeft: 18 }}
      onResortClick={onResortClick}
    />
  ));

  return (
    <View style={styles.scrollViewWrapper}>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
      >
        {sideNavContent}
      </ScrollView>
    </View>
  );
};

export default SlideBar;

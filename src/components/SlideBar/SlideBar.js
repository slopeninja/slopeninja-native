import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { RegularText } from '../AdaptiveText/RegularText';

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

const LoadingIndicator = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Bubbles size={20} color='#4A4A4A'/>
  </View>
);

const ErrorIndicator = () => (
  <View
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <RegularText>Opps. Something{'\''}s not right.</RegularText>
  </View>
);

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
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
      >
        {sideNavContent}
      </ScrollView>
    </View>
  );
};

export default SlideBar;

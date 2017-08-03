import React, { PureComponent } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import ResortNavCard from './ResortNavCard';
import LightText from '../AdaptiveText/LightText';

const TOP_NAV_HEIGHT = 136 + (18 * 2);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewWrapper: {
    width: '100%',
    paddingTop: 18,
    paddingBottom: 18,
    height: TOP_NAV_HEIGHT,
    backgroundColor: '#F5F5F5',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SlideBar extends PureComponent {
  constructor(props) {
    super(props);

    this.ScrollView = null;
  }

  componentWillUpdate(nextProps) {
    if (this.ScrollView) {
      this.ScrollView.scrollTo({
        x: 0,
        y: 0,
        animated: nextProps.resorts.length > 0,
      });
    }
  }

  render() {
    this.props.resorts.sort((a, b) => {
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

    const sideNavContent = this.props.resorts.map(resort => (
      <ResortNavCard
        key={resort.shortName}
        resort={resort}
        style={{ marginLeft: 18 }}
        onResortClick={this.props.onResortClick}
      />
    ));

    let slideBar = (
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        ref={ref => this.ScrollView = ref}
      >
        {sideNavContent}
      </ScrollView>
    );

    if (this.props.resorts.length < 1) {
      slideBar = (
        <View style={styles.emptyList}>
          <LightText
            style={{
              fontSize: 16,
            }}
          >
            We tried, but we couldn&apos;t find &quot;{this.props.keyword}&quot; in Tahoe.
          </LightText>
        </View>
      );
    }

    return (
      <View style={styles.scrollViewWrapper}>
        {slideBar}
      </View>
    );
  }
}

export default SlideBar;

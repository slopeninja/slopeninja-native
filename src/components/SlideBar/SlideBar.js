import React, { PureComponent } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import fuzzysearch from 'fuzzysearch';

import ResortNavCard from './ResortNavCard';
import LightText from '../AdaptiveText/LightText';

import normalizeResorts from '../Home/normalizeResorts';

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

    this.scrollView = null;
  }

  componentWillUpdate(nextProps) {
    setTimeout(() => {
      if (this.scrollView) {
        this.scrollView.scrollTo({
          x: 0,
          y: 0,
          animated: nextProps.resorts.length > 0,
        });
      }
    }, 0);
  }

  render() {
    const normalizedResorts = normalizeResorts(
      this.props.resorts,
      this.props.favoriteResorts,
    );

    let filteredResorts = normalizedResorts;
    if (this.props.keyword) {
      filteredResorts = normalizedResorts.filter(
        (singleResort) => {
          const keyword = this.props.keyword.toUpperCase();
          const name = singleResort.name.toUpperCase();
          const location = singleResort.location.toUpperCase();
          return fuzzysearch(keyword, name) || fuzzysearch(keyword, location);
        },
      );
    }

    if (filteredResorts.length === 0) {
      return (
        <View style={styles.scrollViewWrapper}>
          <View style={styles.emptyList}>
            <LightText
              style={{
                fontSize: 16,
              }}
            >
              We tried, but we couldn&apos;t find &quot;{this.props.keyword}&quot; in Tahoe.
            </LightText>
          </View>
        </View>
      );
    }

    const sideNavCards = filteredResorts.map(resort => (
      <ResortNavCard
        key={resort.shortName}
        resort={resort}
        style={{ marginLeft: 18 }}
        onResortClick={this.props.onResortClick}
      />
    ));

    return (
      <View style={styles.scrollViewWrapper}>
        <ScrollView
          style={styles.scrollView}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          ref={(ref) => { this.scrollView = ref; }}
        >
          {sideNavCards}
        </ScrollView>
      </View>
    );
  }
}

export default SlideBar;

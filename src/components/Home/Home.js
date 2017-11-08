import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Bubbles } from 'react-native-loader';
import fuzzysearch from 'fuzzysearch';
import * as Animatable from 'react-native-animatable';

import SlideBar from '../SlideBar/SlideBar';
import ResortInfoCard from '../ResortInfoCard/ResortInfoCard';

import { fetchResorts } from '../../actions/resorts';

import HomeHeader from './HomeHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentResort: null,
    };
    this.resortInfoCard = null;
    this.resortInfoCardScrollView = null;

    this.handleResortClick = this.handleResortClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchResorts();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.currentResort !== this.state.currentResort) {
      this.resortInfoCardScrollView.scrollTo({
        x: 0,
        y: 0,
        animated: false,
      });
      this.resortInfoCard.fadeInUpBig(200);
    }
  }

  handleResortClick(currentResort) {
    this.setState({
      currentResort,
    });
  }

  render() {
    if (this.props.resortsStatus !== 'success') {
      return (
        <View style={styles.container}>
          <Bubbles size={20} color="#4A4A4A" />
        </View>
      );
    }

    let resort = this.props.firstResort;
    if (this.state.currentResort) {
      resort = this.state.currentResort;
    }

    let resorts = this.props.resorts;
    if (this.props.keyword) {
      resorts = resorts.filter(
        (singleResort) => {
          const keyword = this.props.keyword.toUpperCase();
          const name = singleResort.name.toUpperCase();
          const location = singleResort.location.toUpperCase();
          return fuzzysearch(keyword, name) || fuzzysearch(keyword, location);
        },
      );
    }

    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}
      >
        <SlideBar
          resorts={resorts}
          onResortClick={this.handleResortClick}
          keyword={this.props.keyword}
          favoriteResorts={this.props.favoriteResorts}
        />
        <Animatable.View
          ref={ref => this.resortInfoCard = ref}
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            style={{
              flex: 1,
            }}
            ref={ref => this.resortInfoCardScrollView = ref}
          >
            <ResortInfoCard resort={resort} />
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
  header: props => (
    <HomeHeader {...props} />
  ),
  gesturesEnabled: false,
};

const mapStateToProps = (state) => {
  const unsortedResorts = [...state.app.resorts.resorts];
  let resortList;
  resortList = unsortedResorts.sort((a, b) => {
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

  if (state.favorites.favoriteResorts.length > 0) {
    const prioritizedResorts = state.favorites.favoriteResorts.map(
      resortShortName => unsortedResorts.find(resort =>
      resort.shortName.includes(resortShortName)),
    );
    const resorts = unsortedResorts.filter(
      resort => !state.favorites.favoriteResorts.includes(resort.shortName),
    );
    const sortedResorts = [...resorts].sort((a, b) => {
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

    resortList = [...prioritizedResorts, ...sortedResorts];
  }

  return {
    keyword: state.app.resorts.keyword,
    resorts: state.app.resorts.resorts,
    firstResort: resortList[0],
    resortsStatus: state.app.resorts.resortsStatus,
    favoriteResorts: state.favorites.favoriteResorts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResorts: () => {
      dispatch(fetchResorts);
    },
  };
};

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;

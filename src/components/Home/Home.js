import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import { Bubbles } from 'react-native-loader';
import * as Animatable from 'react-native-animatable';

import SlideBar from '../SlideBar/SlideBar';
import ResortInfoCard from '../ResortInfoCard/ResortInfoCard';

import { fetchResorts } from '../../actions/resorts';

import HomeHeader from './HomeHeader';

import normalizeResorts from './normalizeResorts';

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
      setTimeout(() => {
        this.resortInfoCard.fadeInUpBig(200);
      }, 0);
    }
  }

  handleResortClick(currentResort) {
    this.setState({
      currentResort,
    });
  }

  render() {
    if (!this.props.resorts.length) {
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

    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}
      >
        <SlideBar
          resorts={this.props.resorts}
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
            refreshControl={
              <RefreshControl
                refreshing={this.props.resortsStatus === 'fetching'}
                onRefresh={this.props.fetchResorts}
              />
            }
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            )}
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
  const normalizedResorts = normalizeResorts(
    state.app.resorts.resorts,
    state.favorites.favoriteResorts,
  );

  return {
    keyword: state.app.resorts.keyword,
    resorts: state.app.resorts.resorts,
    firstResort: normalizedResorts[0],
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

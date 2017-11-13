import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  RefreshControl,
  AppState,
} from 'react-native';
import { connect } from 'react-redux';
import { Bubbles } from 'react-native-loader';
import * as Animatable from 'react-native-animatable';

import SlideBar from '../SlideBar/SlideBar';
import ResortInfoCard from '../ResortInfoCard/ResortInfoCard';

import { fetchResorts } from '../../actions/resorts';

import {
  NOTIFICATION_BANNER_USER_PREFERENCE,
} from '../../actions/userSession';

import HomeHeader from './HomeHeader';

import normalizeResorts from './normalizeResorts';

import NotificationBanner from './NotificationBanner';

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
      appState: AppState.currentState,
    };
    this.resortInfoCard = null;
    this.resortInfoCardScrollView = null;

    this.handleResortClick = this.handleResortClick.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchResorts();
    AppState.addEventListener('change', this.handleAppStateChange);
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

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleResortClick(currentResort) {
    this.setState({
      currentResort,
    });
  }

  handleAppStateChange(nextAppState) {
    const prevAppState = this.state.appState;
    this.setState(() => ({
      appState: nextAppState,
    }), () => {
      if (prevAppState === 'background' && this.state.appState === 'active') {
        this.props.fetchResorts();
      }
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

    /* eslint-disable max-len */
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}
      >
        {
          this.props.notificationBannerUserPreference === NOTIFICATION_BANNER_USER_PREFERENCE.PENDING ? (
            <NotificationBanner />
          ) : null
        }
        <SlideBar
          resorts={this.props.resorts}
          onResortClick={this.handleResortClick}
          keyword={this.props.keyword}
          favoriteResorts={this.props.favoriteResorts}
        />
        <Animatable.View
          ref={(ref) => { this.resortInfoCard = ref; }}
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            style={{
              flex: 1,
            }}
            ref={(ref) => { this.resortInfoCardScrollView = ref; }}
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
    /* eslint-enable */
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
    notificationBannerUserPreference: state.userSession.notificationBannerUserPreference,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchResorts: () => {
    dispatch(fetchResorts);
  },
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;

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
        singleResort => {
          const keyword = this.props.keyword.toUpperCase();
          const name = singleResort.name.toUpperCase();
          const location = singleResort.location.toUpperCase();
          return fuzzysearch(keyword, name) || fuzzysearch(keyword, location)
        }
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
              <ResortInfoCard resort={resort}/>
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
  return {
    keyword: state.app.resorts.keyword,
    resorts: state.app.resorts.resorts,
    firstResort: state.app.resorts.resorts[0],
    resortsStatus: state.app.resorts.resortsStatus,
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

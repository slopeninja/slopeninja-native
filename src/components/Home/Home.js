import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { Bubbles } from 'react-native-loader';

import StatusBar from '../StatusBar/StatusBar';
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
    }
    this.handleResortClick = this.handleResortClick.bind(this);
  }

  handleResortClick(currentResort) {
    this.setState({
      currentResort,
    })
  }

  componentDidMount() {
    this.props.fetchResorts();
  }

  render() {

    if (this.props.resortsStatus !== 'success') {
      return (
        <View style={styles.container}>
          <Bubbles size={20} color='#4A4A4A'/>
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
        resort => resort.name.toUpperCase().includes(this.props.keyword.toUpperCase())
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
        <ResortInfoCard
          resort={resort}
        />
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
  header: (props) => (
    <HomeHeader {...props} />
  ),
  gesturesEnabled: false,
};

const mapStateToProps = (state) => {
  return {
    keyword: null,
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

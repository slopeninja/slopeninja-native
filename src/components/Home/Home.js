import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import StatusBar from '../StatusBar/StatusBar';
import SlideBar from '../SlideBar/SlideBar';
import ResortInfoCard from '../ResortInfoCard/ResortInfoCard';

import HomeHeader from './HomeHeader';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}
      >
        <SlideBar />
        <ResortInfoCard />
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
  header: (props) => (
    <HomeHeader {...props} />
  ),
};

export default Home;

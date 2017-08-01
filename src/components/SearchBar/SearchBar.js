import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import { connect } from 'react-redux';

import CancelIcon from './CancelIcon';
import SearchIcon from './SearchIcon';

import { updateKeyword } from '../../actions/resorts';


const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#1ED2FF',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
    color: '#FFFFFF',
  },
  cancelIconContainer: {
    alignSelf: 'center',
  },
});

const SearchBar = props => (
  <View style={styles.searchBar}>
    <View style={styles.searchIconContainer}>
      <SearchIcon />
    </View>
    <TextInput
      style={styles.textInput}
      placeholder="Search Resort"
      placeholderTextColor="#8EE8FF"
      selectionColor="#FFFFFF"
      onChangeText={
        keyword => props.updateKeyword(keyword)
      }
    />
    <View style={styles.cancelIconContainer}>
      <CancelIcon />
    </View>
  </View>
);

const mapDispatchToProps = (dispatch) => {
  return {
    updateKeyword: (keyword) => {
      dispatch(() => updateKeyword(dispatch, keyword));
    },
  };
};

const ConnectedSearchBar = connect(null, mapDispatchToProps)(SearchBar);

export default ConnectedSearchBar;

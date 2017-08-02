import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
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

const SearchBar = (props) => {
  let cancelButton = <View />;
  if (props.keyword) {
    cancelButton = (
      <View
        style={styles.cancelIconContainer}
      >
        <CancelIcon />
      </View>
    );
  }

  return (
    <View style={styles.searchBar}>
      <View style={styles.searchIconContainer}>
        <SearchIcon />
      </View>
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.textInput}
        placeholder="Search Resort"
        placeholderTextColor="#8EE8FF"
        selectionColor="#FFFFFF"
        value={props.keyword}
        onChangeText={
          keyword => props.updateKeyword(keyword)
        }
      />
      <TouchableHighlight
        hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
        underlayColor="transparent"
        onPress={
          () => props.updateKeyword('')
        }
      >
        {cancelButton}
      </TouchableHighlight>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    keyword: state.app.resorts.keyword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateKeyword: (keyword) => {
      dispatch(() => updateKeyword(dispatch, keyword));
    },
  };
};

const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default ConnectedSearchBar;
